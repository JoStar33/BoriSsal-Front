import { getCategory, getGoods } from "@/apis/bori-goods/boriGoods";
import { errorMessage } from "@/apis/error/customError";
import BoriGoodsDetailInfo from "@/components/bori-goods/BoriGoodsDetailInfo/BoriGoodsDetailInfo";
import ErrorPage from "@/components/error/ErrorPage/ErrorPage";
import ReplyLoading from "@/components/loading/ReplyLoading/ReplyLoading";
import ReplyViewer from "@/components/reply/ReplyViewer/ReplyViewer";
import { useBoriGoodsReplyQuery } from "@/hooks/bori-goods/useBoriGoodsReplyQuery/useBoriGoodsReplyQuery";
import { useUserQuery } from "@/hooks/user/useUserQuery/useUserQuery";
import { IBoriGoods, ICategory } from "@/types/boriGoods";
import { initReplyMutation, initUser } from "@/utils/initData";
import { AxiosError } from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";

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
  let { data: user } = useUserQuery();
  let { data: boriGoodsReply, isLoading, refetch, error } = useBoriGoodsReplyQuery(goods._id, limit);
  if (!user) {
    user = initUser;
  }
  if (!boriGoodsReply) {
    boriGoodsReply = initReplyMutation
  }
  if (goodsErrorMessage || categoryErrorMessage) {
    return (
      <ErrorPage error={error} errorText={goodsErrorMessage || categoryErrorMessage}></ErrorPage>
    )
  }
  return (
    <div>
      {/*굿즈의 상세정보 조회*/}
      <BoriGoodsDetailInfo 
        goods={goods}
        category={category} user={user}></BoriGoodsDetailInfo>
      {
        isLoading 
          ? <ReplyLoading></ReplyLoading>
          : <ReplyViewer
            user={user}
            refetch={refetch}
            setLimit={setLimit}
            limit={limit}
            goods_id={goods._id}
            mutationData={boriGoodsReply}
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
  if(!params) {
    return{
      props: {
        goodsErrorMessage: "잘못된 정보입니다."
      },
    }
  }
  await getGoods()
    .then((res) => {
      goodsData = res.data;
    })
    .catch((error: AxiosError) => {
      goodsErrorMessage = errorMessage(error);
    });
  await getCategory()
    .then((res) => {
      categoryData = res;
    })
    .catch((error: AxiosError) => {
      categoryErrorMessage = errorMessage(error);
    });
  const goods = goodsData.find(
    (goods) => goods.bori_goods_name === params.boriGoodsDetail
  );
  if (!goods){
    return {
      props: {
        goodsErrorMessage: "굿즈 데이터가 존재하지 않습니다."
      }
    }
  } 
  const category = categoryData.find(
    (category) => category._id === goods.category_id
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
