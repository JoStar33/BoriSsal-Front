import { useRegistImage } from '@/hooks/common/useRegistImage/useRegistImage';
import Image from "next/image";
import styles from './use_regist_image.module.scss';

interface IProps {
  desc: string
}

const RegistImage = ({desc}: IProps) => {
  const { image, handleOnChangeImage } = useRegistImage();
  return (
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
              <Image fill src={image} alt="굿즈 이미지" />
            </figure>
          </label>
        </>
      }
      <input
        id="input-file"
        type="file"
        role="upload"
        onChange={handleOnChangeImage}
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default RegistImage;