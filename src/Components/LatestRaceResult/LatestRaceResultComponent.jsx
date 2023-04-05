import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  latestRaceResultAction,
  raceResultAction,
} from '../../Store/Actions/RaceResultsActions';
import '../../Css/table.css';

import { randomId } from '../../Utils/RandomId';
import {
  FlagComponent,
  TeamLogoComponent,
  UpArrowsComponent,
  DownArrowsComponent,
} from '../../Common';

const LatestRaceResultComponent = () => {
  const dispatch = useDispatch();

  const latestRaceResult = useSelector((state) => state.latestRaceResult);
  const { loading, error, MRData } = latestRaceResult;

  useEffect(() => {
    if (!MRData) dispatch(latestRaceResultAction());
  }, [dispatch]);

  const resultsData = MRData?.RaceTable?.Races.flatMap((data) => {
    return data;
  });

  const handleOnChange = (e) => {
    const round = e.target.value;
    //Dispatch your action
    dispatch(raceResultAction(round));
  };

  const raceResult = useSelector((state) => state.raceResult);
  const {
    loading: raceResultLoading,
    error: raceResultError,
    MRData: raceResultMRData,
  } = raceResult;

  const resultData = raceResultMRData?.RaceTable?.Races.flatMap((data) => {
    return data;
  });

  return (
    <>
      {error || raceResultError ? 'Error comp pending...' : null}
      {loading || raceResultLoading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          {!resultData
            ? resultsData?.map((result) => (
                <div key={randomId(8)}>
                  <table>
                    <caption>
                      <div> {result.raceName}</div>
                      <div>
                        {result.season}{' '}
                        <select onChange={handleOnChange}>
                          <option defaultValue={result.round}>Round</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
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
                            <TeamLogoComponent team={el.Constructor?.name} />
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
              ))
            : resultData?.map((result) => (
                <div key={randomId(8)}>
                  <table>
                    <caption>
                      <div> {result.raceName}</div>
                      <div>
                        {result.season} Round{' '}
                        <select onChange={handleOnChange}>
                          <option defaultValue={result.round}>
                            Select round
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </select>
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
                            <TeamLogoComponent team={el.Constructor?.name} />
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
