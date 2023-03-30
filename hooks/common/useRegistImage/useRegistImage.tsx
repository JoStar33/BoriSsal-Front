import Image from "next/image";
import { useRef, useState } from "react";
import styles from './use_regist_image.module.scss';

export const useRegistImage = () => {
  const [image, setImage] = useState<any>("");
  const formData = useRef<FormData>(new FormData());
  const handleOnChangeImage = (e: React.ChangeEvent<HTMLInputElement>, imageType: string) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    console.log(file);
    const fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (e) => {
      if (!e.target) return;
      if (fr.readyState === 2) {
        formData.current = new FormData();
        setImage(e.target.result);
        formData.current.append(imageType, file);
      }
    };
  };
  const renderRegistImage = (desc: string, imageType: string) => (
    <>
      {!image ? 
        <label className={styles.regist_image} htmlFor="input-file">
          {
            desc
          }
        </label>
      : 
        <>
          <label className={styles.regist_image} htmlFor="input-file">
            <figure
              style={{ width: "30vw", height: "30vw", position: "relative" }}
            >
              <Image fill src={image} alt={desc} />
            </figure>
          </label>
        </>
      }
      <input
        id="input-file"
        type="file"
        role="upload"
        onChange={event => handleOnChangeImage(event, imageType)}
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
    </>
  );
  return { image, setImage, formData, handleOnChangeImage, renderRegistImage};
};
