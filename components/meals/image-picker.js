"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";
const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState();
  const inputImg = useRef();
  const handlePickClick = () => {
    inputImg.current.click();
  };
  const handleImgChange = () => {
    const file = inputImg.current.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          <Image src={pickedImage} alt="The image selected by user" fill />
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={inputImg}
          onChange={handleImgChange}
        />
        <button className={classes.button} onClick={handlePickClick}>
          Pick an image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
