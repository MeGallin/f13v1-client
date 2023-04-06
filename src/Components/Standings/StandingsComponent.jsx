import './StandingsComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { driversStandingsAction } from '../../Store/Actions/DriversActions';
import { randomId } from '../../Utils/RandomId';

const StandingsComponent = () => {
  const dispatch = useDispatch();

  const driversStandings = useSelector((state) => state.driversStandings);
  const { loading, error, MRData } = driversStandings;

  const driverStandingsData = MRData?.StandingsTable?.StandingsLists?.map(
    (data) => data,
  );

  console.log(driverStandingsData);

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
            {driverStandingsData?.map((data) => (
              <div key={randomId(8)}>
                <h1>{data.season}</h1>
                {data?.DriverStandings?.map((standings) => (
                  <div key={randomId(8)}>
                    {standings.position}:points{standings.points}:wins
                    {standings.wins}driver:{standings.Driver.code}
                  </div>
                ))}
              </div>
            ))}
          </>
        )}
      </fieldset>
    </>
  );
};

export default StandingsComponent;
