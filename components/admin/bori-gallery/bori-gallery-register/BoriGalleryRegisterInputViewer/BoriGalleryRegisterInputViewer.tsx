import { IPostBoriGallery } from '@/types/boriGallery';
import React, { Dispatch, SetStateAction } from 'react';
import styles from './bori_gallery_register_input_viewer.module.scss';

interface IProps {
  galleryInfo: IPostBoriGallery;
  setGalleryInfo: Dispatch<SetStateAction<IPostBoriGallery>>
}

const BoriGalleryRegisterInputViewer = ({galleryInfo, setGalleryInfo}: IProps) => {
  const handleOnChangeGalleryInfo = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setGalleryInfo({
      ...galleryInfo,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className={styles.text_container}>
        <label htmlFor="goods-name">제목:</label>
        <input
          onChange={handleOnChangeGalleryInfo}
          name="bori_gallery_title"
          role="bori_gallery_title"
          id="goods-name"
          type="text"
        />
      </div>
      <div className={styles.content_container}>
        <p>갤러리 설명</p>
        <textarea
          onChange={handleOnChangeGalleryInfo}
          name="bori_gallery_desc"
          role="bori_gallery_desc"
        ></textarea>
      </div>
    </>
  );
};

export default BoriGalleryRegisterInputViewer;