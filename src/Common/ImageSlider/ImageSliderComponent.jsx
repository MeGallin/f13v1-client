import { sliderImages } from './sliderImages';

const ImageSliderComponent = ({ text }) => {
  const randomNumber = () => {
    const length = sliderImages.length;
    return Math.floor(Math.random() * length);
  };
  const img = sliderImages[randomNumber()]?.path;

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundImage: `url(${img})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '5em',
        WebkitMaskImage:
          '-webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 1)), to(rgba(0, 0, 0, 0)))',
        maskImage:
          'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      }}
    >
      <h2
        style={{
          backgroundColor: 'white',
          display: 'inline',
          padding: '0.2em',
          position: 'relative',
          top: '5%',
        }}
      >
        F1 Season {text}
      </h2>
    </div>
  );
};

export default ImageSliderComponent;
