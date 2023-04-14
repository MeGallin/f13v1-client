import { sliderImages } from './sliderImages';

const ImageSliderComponent = () => {
  const randomNumber = () => {
    const length = sliderImages.length;
    return Math.floor(Math.random() * length);
  };
  const img = sliderImages[randomNumber()]?.path;

  return (
    <div
      style={{
        border: '1px solid rgba(200,200,200,0.5)',
        borderTopRightRadius: '32px',
        borderBottomLeftRadius: '32px',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          margin: '4px',
          backgroundColor: 'white',
          border: '1px solid rgba(200,200,200,0.5)',
          borderTopRightRadius: '32px',
          borderBottomLeftRadius: '32px',
          height: '6em',
        }}
      ></div>
    </div>
  );
};

export default ImageSliderComponent;
