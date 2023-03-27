import { useState } from "react";
import BoriGalleryRegister from "../BoriGalleryRegister/BoriGalleryRegister";
import BoriGoodsRegister from "../BoriGoodsRegister/BoriGoodsRegister";
import OrderController from "../OrderController/OrderController";
import styles from './admin_viewer.module.scss';

const AdminViewer = () => {
  const [pageState, setPageState] = useState<string>("boriGoods");
  return (
    <div className={styles.admin_viewer_container}>
      <div className={styles.viewer_change_button_container}>
        <button onClick={() => setPageState("boriGoods")}>boriGoods</button>
        <button onClick={() => setPageState("boriGallery")}>boriGallery</button>
        <button onClick={() => setPageState("orderControl")}>orderControl</button>
      </div>
      <div className={styles.admin_viewer}>
        {
          pageState === "boriGoods" && <BoriGoodsRegister/>
        }
        {
          pageState === "boriGallery" && <BoriGalleryRegister/>
        }
        {
          pageState === "orderControl" && <OrderController/>
        }
      </div>
    </div>
  );
};

export default AdminViewer;