import './StandingsComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driversStandingsAction } from '../../Store/Actions/DriversActions';
import { randomId } from '../../Utils/RandomId';
import {
  DriverPhotoComponent,
  DriversNumberComponent,
  ImageSliderComponent,
  LoadingSpinnerComponent,
} from '../../Common';

const StandingsComponent = () => {
  const dispatch = useDispatch();

  const driversStandings = useSelector((state) => state.driversStandings);
  const { loading, error, MRData } = driversStandings;

  const driverStandingsData = MRData?.StandingsTable?.StandingsLists?.map(
    (data) => data,
  );

  useEffect(() => {
    //Dispatch Action
    if (!MRData) dispatch(driversStandingsAction(2023, 3));
  }, [dispatch]);
  return (
    <>
      {error ? 'Error comp pending...' : null}
      <ImageSliderComponent />
      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">
            {' '}
            <LoadingSpinnerComponent />
          </span>
        ) : (
          <>
            <div className="standings-container">
              <div className="standings-feature">
                {driverStandingsData?.map((data) =>
                  data?.DriverStandings?.map((standings) => (
                    <div key={randomId(8)} className="standings-item">
                      <h3>SEASON {MRData?.StandingsTable?.season}</h3>
                      <div>
                        <div className="global-flex-wrapper standing-points">
                          <div>
                            <div>p</div>
                            <DriversNumberComponent
                              number={standings.position}
                              fontSize={3.5}
                            />
                          </div>
                          <div className="standings-image-wrapper">
                            <DriverPhotoComponent
                              driver={standings.Driver.code}
                            />
                          </div>
                          <div>
                            <div>pts</div>
                            <DriversNumberComponent
                              number={standings.points}
                              fontSize={3.5}
                            />
                          </div>
                        </div>
                        <hr className="style-one" />

                        <div className="global-flex-wrapper">
                          <div>{standings.Driver.code}</div>
                          <div>
                            {standings.Driver.givenName}{' '}
                            {standings.Driver.familyName}
                          </div>
                          <div>
                            wins:{' '}
                            <DriversNumberComponent number={standings.wins} />{' '}
                          </div>
                        </div>
                        <hr className="style-one" />
                        <div>Events won to follow</div>
                      </div>
                    </div>
                  )),
                )}
              </div>
            </div>
          </>
        )}
      </fieldset>
    </>
  );
};

export default StandingsComponent;
