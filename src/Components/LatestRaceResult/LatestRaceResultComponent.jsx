import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { latestRaceResultAction } from '../../Store/Actions/RaceResultsActions';
import './LatestRaceResultComponent.css';

import { randomId } from '../../Utils/RandomId';

const LatestRaceResultComponent = () => {
  const dispatch = useDispatch();

  const latestRaceResult = useSelector((state) => state.latestRaceResult);
  const { loading, error, MRData } = latestRaceResult;

  useEffect(() => {
    if (!MRData) {
      dispatch(latestRaceResultAction());
    }
  }, [dispatch]);
  const resultsData = MRData?.RaceTable?.Races.flatMap((data) => {
    return data;
  });
  return (
    <>
      {error ? 'Error comp pending...' : null}
      {loading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          {resultsData?.map((result) => (
            <div key={randomId(8)}>
              {console.log(result)}
              <table>
                <caption>
                  {result.raceName}
                  Season:{result.season}
                  Round{result.round}
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Position</th>
                    <th scope="col">Points</th>
                    <th scope="col">Driver</th>
                    <th scope="col">Team</th>
                    <th scope="col">Fastest Lap</th>
                    <th scope="col">Grid</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {result?.Results.map((el) => (
                    <tr key={randomId(8)}>
                      <td>{el.position}</td>
                      <td>{el.points}</td>
                      <td>{el.Driver.code}</td>
                      <td>{el.Constructor?.name}</td>
                      <td>{el.FastestLap?.lap}</td>
                      <td>{el.grid}</td>
                      <td>
                        <div>{el.status}</div>
                        {el.Time?.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default LatestRaceResultComponent;
