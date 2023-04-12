import './DriversNumberComponent.css';

const DriversNumberComponent = ({ number, fontSize }) => {
  return (
    <span
      className="drivers-permanentNumber"
      style={{ fontSize: `${fontSize}rem` }}
    >
      {number}
    </span>
  );
};

export default DriversNumberComponent;
