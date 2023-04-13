import FootballComponent from '../Football/FootballComponent';
import MotoGPComponent from '../MotoGP/MotoGPComponent';
import RugbyComponent from '../Rugby/RugbyComponent';
import SportComponent from '../Sport/SportComponent';

import './RoundUpComponent.css';

const RoundUpComponent = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <MotoGPComponent />
        </div>
        <div className="box">
          <RugbyComponent />
        </div>
        <div className="box">
          <SportComponent />
        </div>
        <div className="box">
          <FootballComponent />
        </div>
      </div>
    </>
  );
};

export default RoundUpComponent;
