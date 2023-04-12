import './StandingsComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driversStandingsAction } from '../../Store/Actions/DriversActions';
import { randomId } from '../../Utils/RandomId';
import { DriverPhotoComponent, DriversNumberComponent } from '../../Common';

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

      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">...loading</span>
        ) : (
          <>
            <div className="standings-container ">
              <h1>F1 Season ... {MRData?.StandingsTable?.season}</h1>

              <div className="standings-feature">
                {driverStandingsData?.map((data) =>
                  data?.DriverStandings?.map((standings) => (
                    <div key={randomId(8)} className="standings-item">
                      <div>
                        <div className="global-flex-wrapper standing-points">
                          <div>
                            <DriversNumberComponent
                              number={standings.position}
                              fontSize={3.5}
                            />
                          </div>
                          <div>
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
