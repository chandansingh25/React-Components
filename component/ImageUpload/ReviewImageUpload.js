import React, { useState } from "react";
import { BsPlus, BsX } from "react-icons/bs";

const ReviewImageUpload = () => {
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files.length > 0) {
      const newImagePreviews = [];

      Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onloadend = () => {
          newImagePreviews.push(reader.result);

          // If all images have been processed, update the state
          if (newImagePreviews.length === files.length) {
            setImagePreviews([...imagePreviews, ...newImagePreviews]);
          }
        };

        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index, event) => {
    event.stopPropagation();
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div>
      <input
        type="file"
        id="upload_img"
        hidden
        onChange={handleFileChange}
        accept="image/*"
        multiple
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {imagePreviews.map((preview, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              margin: "4px",
              overflow: "hidden",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          >
            <img
              src={preview}
              alt={`Preview ${index + 1}`}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div
              className="shadow"
              style={{
                position: "absolute",
                top: "4px",
                right: "4px",
                background: "#000",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              onClick={(event) => removeImage(index, event)}
            >
              <BsX size={18} color="#fff" />
            </div>
          </div>
        ))}
        <div
          onClick={() => document.getElementById("upload_img").click()}
          style={{
            width: "80px",
            height: "80px",
            border: "2px dashed #ccc",
            borderRadius: "18px",
            overflow: "hidden",
            position: "relative",
            margin: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <BsPlus fontSize={30} style={{ color: "#ccc" }} />
        </div>
      </div>
    </div>
  );
};

export default ReviewImageUpload;
