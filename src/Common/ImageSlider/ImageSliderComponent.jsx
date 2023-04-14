import "./ImageSliderComponent.css";
import { sliderImages } from "./sliderImages";

const ImageSliderComponent = () => {
  const randomNumber = () => {
    const length = sliderImages.length;
    return Math.floor(Math.random() * length);
  };
  const img = sliderImages[randomNumber()]?.path;

  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "6em",
      }}
    ></div>
  );
};

export default ImageSliderComponent;
