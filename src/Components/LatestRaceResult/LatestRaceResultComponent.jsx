import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { latestRaceResultAction } from '../../Store/Actions/RaceResultsActions';
import './LatestRaceResultComponent.css';

import { randomId } from '../../Utils/RandomId';
import FlagComponent from '../../Common/Flags/FlagComponent';
import TeamLogo from '../../Common/TeamLogo/TeamLogoComponent';
import UpArrowsComponent from '../../Common/UpArrows/UpArrowsComponent';
import DownArrowsComponent from '../../Common/DownArrows/DownArrowsComponent';

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
              <table>
                <caption>
                  <div> {result.raceName}</div>
                  <div>
                    {result.season} Round {result.round}
                  </div>
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
                      <td>
                        <div className="flex-wrapper">
                          <div>
                            <FlagComponent
                              nationality={el.Driver?.nationality}
                            />
                          </div>
                          <div>
                            <div>
                              {el.Driver?.givenName} {el.Driver?.familyName}
                            </div>
                            <div>
                              {el.Driver?.code}{' '}
                              <sub>{el.Driver?.permanentNumber}</sub>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <sub>{el.Constructor?.name}</sub>
                        <TeamLogo team={el.Constructor?.name} />
                      </td>
                      <td>{el.FastestLap?.lap}</td>
                      <td>
                        <div>{el.grid}</div>

                        <div>
                          {Number(el.grid) - Number(el.position) < 0 ? (
                            <DownArrowsComponent />
                          ) : (
                            <UpArrowsComponent />
                          )}
                          {Number(el.grid) - Number(el.position)} place[s].
                        </div>
                      </td>
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
