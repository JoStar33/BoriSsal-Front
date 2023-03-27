
const BoriGalleryRegister = () => {
  const handleOnChangeImage = () => {
    
  }
  return (
    <div>
      <label
        style={{
          cursor: "pointer",
          position: "absolute",
          top: "150px",
          left: "150px",
        }}
        className="input-file-button"
        htmlFor="input-file"
      >
      </label>
      <input
        id="input-file"
        type="file"
        onChange={handleOnChangeImage}
        style={{ display: "none" }}
        accept="image/png, image/jpeg"
      />
    </div>
  );
};

export default BoriGalleryRegister;