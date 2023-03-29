import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./use_regist_image.module.scss";

export const useRegistImage = () => {
  const [image, setImage] = useState<any>("");
  const formData = useRef<FormData>(new FormData());
  const handleOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (e) => {
      if (!e.target) return;
      if (fr.readyState === 2) {
        formData.current = new FormData();
        setImage(e.target.result);
        formData.current.append("bori_gallery_images", file);
      }
    };
  };
  const renderRegistImage = (desc: string) => (
    <>
      {!image ? (
        <label className={styles.regist_image} htmlFor="input-file">
          {
            desc
          }
        </label>
      ) : (
        <>
          <label className={styles.regist_image} htmlFor="input-file">
            <figure
              style={{ width: "30vw", height: "30vw", position: "relative" }}
            >
              <Image fill src={image} alt="굿즈 이미지" />
            </figure>
          </label>
          <input
            id="input-file"
            type="file"
            onChange={handleOnChangeImage}
            style={{ display: "none" }}
            accept="image/png, image/jpeg"
          />
        </>
      )}
    </>
  );
  return { image, setImage, formData, handleOnChangeImage, renderRegistImage };
};
