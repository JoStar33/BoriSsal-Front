import { useRef, useState } from "react";

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
  return { image, setImage, formData, handleOnChangeImage };
};
