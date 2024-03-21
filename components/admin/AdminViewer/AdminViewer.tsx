import { useState } from 'react';
import AdminViewerButton from '../AdminViewerButton/AdminViewerButton';
import BoriGalleryList from '../bori-gallery/bori-gallery-list/BoriGalleryList/BoriGalleryList';
import BoriGalleryRegister from '../bori-gallery/bori-gallery-register/BoriGalleryRegister/BoriGalleryRegister';
import BoriGoodsList from '../bori-goods/bori-goods-list/BoriGoodsList/BoriGoodsList';
import BoriGoodsRegister from '../bori-goods/bori-goods-register/BoriGoodsRegister/BoriGoodsRegister';
import OrderController from '../order/OrderController/OrderController';
import styles from './admin_viewer.module.scss';

const AdminViewer = () => {
  const [pageState, setPageState] = useState<string>('boriGoods');
  return (
    <div className={styles.admin_viewer_container}>
      <div className={styles.viewer_change_button_container}>
        <AdminViewerButton status="boriGoods" pageState={pageState} setPageState={setPageState} />
        <AdminViewerButton status="goodsList" pageState={pageState} setPageState={setPageState} />
        <AdminViewerButton status="boriGallery" pageState={pageState} setPageState={setPageState} />
        <AdminViewerButton status="galleryList" pageState={pageState} setPageState={setPageState} />
        <AdminViewerButton status="orderControl" pageState={pageState} setPageState={setPageState} />
      </div>
      <div className={styles.admin_viewer}>
        {pageState === 'boriGoods' && <BoriGoodsRegister />}
        {pageState === 'goodsList' && <BoriGoodsList />}
        {pageState === 'boriGallery' && <BoriGalleryRegister />}
        {pageState === 'galleryList' && <BoriGalleryList />}
        {pageState === 'orderControl' && <OrderController />}
      </div>
    </div>
  );
};

export default AdminViewer;
