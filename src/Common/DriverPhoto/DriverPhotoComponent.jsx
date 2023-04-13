import { driverPhotos } from '../../../src/assets/data/driverPhotos';

const DriverPhotoComponent = ({ driver }) => {
  const driverPhotoSrc = driverPhotos.filter((photo) => {
    if (photo.code === driver) {
      return photo;
    }
    return false;
  });

  return (
    <>
      <img
        aria-busy="true"
        src={driverPhotoSrc[0]?.path}
        alt={driver}
        style={{
          borderTopRightRadius: '32px',
          borderBottomLeftRadius: '32px',
          padding: '4px',
          backgroundColor: 'white',
        }}
      />
    </>
  );
};

export default DriverPhotoComponent;
