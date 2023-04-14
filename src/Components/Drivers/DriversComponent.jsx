import './DriversComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driversAction } from '../../Store/Actions/DriversActions';
import moment from 'moment';
import {
  DriverPhotoComponent,
  FlagComponent,
  ImageSliderComponent,
} from '../../Common';
import DriversNumberComponent from '../../Common/DriversNumber/DriversNumberComponent';

const DriversComponent = () => {
  const dispatch = useDispatch();

  const drivers = useSelector((state) => state.drivers);
  const { loading, error, MRData } = drivers;

  const driversData = MRData?.DriverTable?.Drivers.flatMap((data) => data);

  console.log(MRData?.DriverTable);

  useEffect(() => {
    //Dispatch Action for Drivers
    if (!MRData) dispatch(driversAction());
  }, []);

  return (
    <>
      {error ? 'Error comp pending...' : null}
      <ImageSliderComponent />
      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">...loading</span>
        ) : (
          <>
            <div className="drivers-container">
              <div className="drivers-feature">
                {driversData?.map((driver) => (
                  <div key={driver.driverId} className="drivers-item">
                    <h3>Drivers {MRData?.DriverTable?.season}</h3>
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

                        <DriversNumberComponent
                          number={driver.permanentNumber}
                          fontSize={3.5}
                        />
                      </div>
                      <hr className="style-one" />
                      <div className="global-flex-wrapper">
                        <FlagComponent nationality={driver.nationality} />
                        <div className="drivers-image-wrapper">
                          <DriverPhotoComponent driver={driver.code} />
                        </div>
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
