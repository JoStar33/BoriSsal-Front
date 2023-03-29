import { useState } from "react";
import BoriGalleryList from "../bori-gallery/BoriGalleryList/BoriGalleryList";
import BoriGalleryRegister from "../bori-gallery/BoriGalleryRegister/BoriGalleryRegister";
import BoriGoodsList from "../bori-goods/BoriGoodsList/BoriGoodsList";
import BoriGoodsRegister from "../bori-goods/BoriGoodsRegister/BoriGoodsRegister";
import OrderController from "../order/OrderController/OrderController";
import styles from './admin_viewer.module.scss';

const AdminViewer = () => {
  const [pageState, setPageState] = useState<string>("boriGoods");
  return (
    <div className={styles.admin_viewer_container}>
      <div className={styles.viewer_change_button_container}>
        <button onClick={() => setPageState("boriGoods")}>boriGoods</button>
        <button onClick={() => setPageState("goodsList")}>goodsList</button>
        <button onClick={() => setPageState("boriGallery")}>boriGallery</button>
        <button onClick={() => setPageState("galleryList")}>galleryList</button>
        <button onClick={() => setPageState("orderControl")}>orderControl</button>
      </div>
      <div className={styles.admin_viewer}>
        {
          pageState === "boriGoods" && <BoriGoodsRegister/>
        }
        {
          pageState === "goodsList" && <BoriGoodsList/>
        }
        {
          pageState === "boriGallery" && <BoriGalleryRegister/>
        }
        {
          pageState === "galleryList" && <BoriGalleryList/>
        }
        {
          pageState === "orderControl" && <OrderController/>
        }
      </div>
    </div>
  );
};

export default AdminViewer;