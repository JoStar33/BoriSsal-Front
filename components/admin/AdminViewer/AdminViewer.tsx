import { useState } from "react";
import BoriGalleryRegister from "../BoriGalleryRegister/BoriGalleryRegister";
import BoriGoodsRegister from "../BoriGoodsRegister/BoriGoodsRegister";
import OrderController from "../OrderController/OrderController";

const AdminViewer = () => {
  const [pageState, setPageState] = useState<string>("boriGoods");
  return (
    <div>
      <div>
        <button onClick={() => setPageState("boriGoods")}>boriGoods</button>
        <button onClick={() => setPageState("boriGallery")}>boriGallery</button>
        <button onClick={() => setPageState("orderControl")}>orderControl</button>
      </div>
      <div>
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