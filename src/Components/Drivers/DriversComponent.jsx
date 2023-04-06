import './DriversComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driversAction } from '../../Store/Actions/DriversActions';
import moment from 'moment';
import { FlagComponent } from '../../Common';

const DriversComponent = () => {
  const dispatch = useDispatch();

  const Drivers = useSelector((state) => state.Drivers);
  const { loading, error, MRData } = Drivers;

  const driversData = MRData?.DriverTable?.Drivers.flatMap((data) => data);

  console.log(MRData?.DriverTable);

  useEffect(() => {
    //Dispatch Action for Drivers
    if (!MRData) dispatch(driversAction());
  }, []);

  return (
    <>
      {error ? 'Error comp pending...' : null}

      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">...loading</span>
        ) : (
          <>
            <div className="drivers-container">
              <h1>Drivers {MRData?.DriverTable?.season}</h1>
              <div className="drivers-feature">
                {driversData?.map((driver) => (
                  <div key={driver.driverId} className="drivers-item">
                    <div>
                      <div className="global-flex-wrapper">
                        <div>
                          <span className="drivers-name">
                            {driver.givenName}
                          </span>{' '}
                          <span className="drivers-family-name">
                            {driver.familyName}
                          </span>
                        </div>

                        <div className="drivers-permanentNumber">
                          {driver.permanentNumber}
                        </div>
                      </div>
                      <hr className="style-one" />
                      <div className="global-flex-wrapper">
                        <FlagComponent nationality={driver.nationality} />
                        <div>{driver.nationality}</div>
                      </div>
                      <hr className="style-one" />
                      <div>
                        {moment().diff(driver.dateOfBirth, 'years')} years old.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </fieldset>
    </>
  );
};

export default DriversComponent;
