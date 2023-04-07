import { useBoriGalleryImageMutation } from "@/hooks/bori-gallery/useBoriGalleryImageMutation/useBoriGalleryImageMutation";
import { IBoriGallery } from "@/types/boriGallery";
import Image from "next/image";
import { useRef } from "react";

interface IProps {
  boriGallery: IBoriGallery
} 

const GalleryItemImage = ({boriGallery}: IProps) => {
  const formData = useRef<FormData>(new FormData());
  const { mutate: updateBoriImage } = useBoriGalleryImageMutation(
    boriGallery._id
  );
  const handleOnChangeGoodsImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const file: File = e.target.files[0];
    formData.current.append("bori_goods_images", file);
    updateBoriImage(formData.current);
  };
  return (
    <>
      <label htmlFor="">
        <figure
          style={{
            width: "10vw",
            height: "10vw",
            position: "relative",
            margin: "2vw",
          }}
        >
          <Image
            fill
            style={{objectFit: "cover"}}
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${boriGallery.bori_gallery_image}`}
            alt={boriGallery.bori_gallery_title}
          />
        </figure>
      </label>
      <input
        id="input-file"
        type="file"
        onChange={handleOnChangeGoodsImage}
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
    </>
  );
};

export default GalleryItemImage;
