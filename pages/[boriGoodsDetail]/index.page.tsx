import React, { useState } from "react";
import { getCategory, getGoods } from "@/apis/bori-goods/boriGoods";
import { errorMessage } from "@/apis/error/customError";
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { AxiosError } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useBoriGoodsReplyQuery } from "@/hooks/bori-goods/useBoriGoodsReplyQuery/useBoriGoodsReplyQuery";
import ReplyViewer from "@/components/reply/ReplyViewer/ReplyViewer";
import ReplyLoading from "@/components/loading/ReplyLoading/ReplyLoading";
import BoriGoodsDetailInfo from "@/components/bori-goods/BoriGoodsDetailInfo/BoriGoodsDetailInfo";
import ErrorPage from "@/components/error/ErrorPage/ErrorPage";

interface IProps {
  goods: IBoriGoods;
  category: ICategory;
  categoryErrorMessage: string;
  goodsErrorMessage: string;
}

const BoriGoodsDetail = ({
  goods,
  category,
  categoryErrorMessage,
  goodsErrorMessage,
}: IProps) => {
  const [limit, setLimit] = useState<number>(1);
  const { data, isLoading } = useBoriGoodsReplyQuery(goods._id, limit);
  if (categoryErrorMessage) {
    return (
      <ErrorPage errorMessage={categoryErrorMessage}></ErrorPage>
    )
  }
  if (goodsErrorMessage) {
    return (
      <ErrorPage errorMessage={goodsErrorMessage}></ErrorPage>
    )
  }
  return (
    <div>
      {/*굿즈의 상세정보 조회*/}
      <BoriGoodsDetailInfo 
        goods={goods} 
        category={category}></BoriGoodsDetailInfo>
      {
        isLoading 
          ? <ReplyLoading></ReplyLoading>
          : <ReplyViewer
            setLimit={setLimit}
            limit={limit}
            goods_id={goods._id}
            mutationData={data?.data}
          ></ReplyViewer>
      }
    </div>
  );
};

export default BoriGoodsDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  let goodsData: IBoriGoods[] = [];
  await getGoods().then((res) => {
    goodsData = res.data;
  });
  const paths = goodsData.map((goods) => ({
    params: { boriGoodsDetail: goods.bori_goods_name },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let goodsData: IBoriGoods[] = [];
  let categoryData: ICategory[] = [];
  let categoryErrorMessage = null;
  let goodsErrorMessage = null;
  await getGoods()
    .then((res) => {
      goodsData = res.data;
    })
    .catch((error: AxiosError) => {
      goodsErrorMessage = errorMessage(error);
    });
  await getCategory()
    .then((res) => {
      categoryData = res.data;
    })
    .catch((error: AxiosError) => {
      categoryErrorMessage = errorMessage(error);
    });
  const goods = goodsData.find(
    (goods) => goods.bori_goods_name === params?.boriGoodsDetail
  );
  const category = categoryData.find(
    (category) => category._id === goods?.category_id
  );
  return {
    props: {
      goods,
      category,
      categoryErrorMessage,
      goodsErrorMessage,
    },
  };
};
