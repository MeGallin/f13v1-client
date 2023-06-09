import '../../Css/table.css';
import './CalendarComponent.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  calendarAction,
  winnersRoundFiveAction,
  winnersRoundFourAction,
  winnersRoundOneAction,
  winnersRoundThreeAction,
  winnersRoundTwoAction,
} from '../../Store/Actions/CalendarActions';
import { randomId } from '../../Utils/RandomId';
import {
  FlagComponent,
  ImageSliderComponent,
  LoadingSpinnerComponent,
  WinnersComponent,
} from '../../Common';
import moment from 'moment';

const CalendarComponent = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state) => state.calendar);
  const { loading, error, MRData } = calendar;

  const winnersRoundOne = useSelector((state) => state.winnersRoundOne);
  const {
    loading: LoadingDataRound1,
    error: errorDataRound1,
    data: dataRound1,
  } = winnersRoundOne;

  const winnersRoundTwo = useSelector((state) => state.winnersRoundTwo);
  const {
    loading: LoadingDataRound2,
    error: errorDataRound2,
    data: dataRound2,
  } = winnersRoundTwo;

  const winnersRoundThree = useSelector((state) => state.winnersRoundThree);
  const {
    loading: LoadingDataRound3,
    error: errorDataRound3,
    data: dataRound3,
  } = winnersRoundThree;

  const winnersRoundFour = useSelector((state) => state.winnersRoundFour);
  const {
    loading: LoadingDataRound4,
    error: errorDataRound4,
    data: dataRound4,
  } = winnersRoundFour;

  const winnersRoundFive = useSelector((state) => state.winnersRoundFive);
  const {
    loading: LoadingDataRound5,
    error: errorDataRound5,
    data: dataRound5,
  } = winnersRoundFive;

  useEffect(() => {
    //Dispatch action current year
    if (!MRData) dispatch(calendarAction(2023));
    if (!dataRound1) dispatch(winnersRoundOneAction(1));
    if (!dataRound2) dispatch(winnersRoundTwoAction(2));
    if (!dataRound3) dispatch(winnersRoundThreeAction(3));
    if (!dataRound4) dispatch(winnersRoundFourAction(4));
    if (!dataRound5) dispatch(winnersRoundFiveAction(5));
  }, [dispatch]);

  const calendarData = MRData?.RaceTable?.Races.flatMap((data) => data);

  return (
    <>
      {error ? 'Error comp pending...' : null}
      <ImageSliderComponent text={MRData?.RaceTable?.season} />
      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">
            <LoadingSpinnerComponent />
          </span>
        ) : (
          <>
            <div className="calendar-container ">
              <div className="calendar-feature">
                {calendarData?.map((round) => (
                  <div key={randomId(8)} className="calendar-item">
                    <fieldset className="fieldSet ">
                      <legend>Round {round.round}</legend>
                      <div className="global-flex-wrapper">
                        <div>
                          <div className="calendar-date-wrapper">
                            {moment(round.date).format('MMM Do')}
                          </div>
                          <div className="small-text">{round.time}</div>
                        </div>
                        <FlagComponent
                          nationality={round.Circuit?.Location?.country}
                        />
                      </div>
                      <hr className="style-one" />
                      <h3>{round.raceName}</h3>
                      {moment() > moment(round.date) ? (
                        <>
                          <div className="calendar-round-completed">
                            Event ended,{' '}
                            {moment(round.date).endOf('day').fromNow()}
                          </div>
                          <hr className="style-one" />

                          <h3>Podium</h3>
                          <div className="calendar-practice event-completed ">
                            {errorDataRound1 ? 'Error comp pending...' : null}
                            {LoadingDataRound1 ? (
                              <span aria-busy="true">
                                <LoadingSpinnerComponent />
                              </span>
                            ) : round?.round === '1' ? (
                              winnersRoundOne.data?.map((winner) => (
                                <div
                                  key={randomId(8)}
                                  className="global-flex-wrapper "
                                >
                                  <div>P {winner.position}</div>
                                  <div> {winner.driver}</div>
                                  <div> {winner.number}</div>
                                </div>
                              ))
                            ) : null}

                            {errorDataRound2 ? 'Error comp pending...' : null}
                            {LoadingDataRound2 ? (
                              <span aria-busy="true">
                                <LoadingSpinnerComponent />
                              </span>
                            ) : round?.round === '2' ? (
                              winnersRoundTwo.data?.map((winner) => (
                                <div
                                  key={randomId(8)}
                                  className="global-flex-wrapper "
                                >
                                  <div>P {winner.position}</div>
                                  <div> {winner.driver}</div>
                                  <div> {winner.number}</div>
                                </div>
                              ))
                            ) : null}

                            {errorDataRound3 ? 'Error comp pending...' : null}
                            {LoadingDataRound3 ? (
                              <span aria-busy="true">
                                <LoadingSpinnerComponent />
                              </span>
                            ) : round?.round === '3' ? (
                              winnersRoundThree.data?.map((winner) => (
                                <div
                                  key={randomId(8)}
                                  className="global-flex-wrapper "
                                >
                                  <div>P {winner.position}</div>
                                  <div> {winner.driver}</div>
                                  <div> {winner.number}</div>
                                </div>
                              ))
                            ) : null}

                            {errorDataRound4 ? 'Error comp pending...' : null}
                            {LoadingDataRound4 ? (
                              <span aria-busy="true">
                                <LoadingSpinnerComponent />
                              </span>
                            ) : round?.round === '4' ? (
                              winnersRoundFour.data?.map((winner) => (
                                <div
                                  key={randomId(8)}
                                  className="global-flex-wrapper "
                                >
                                  <div>P {winner.position}</div>
                                  <div> {winner.driver}</div>
                                  <div> {winner.number}</div>
                                </div>
                              ))
                            ) : null}

                            {errorDataRound5 ? 'Error comp pending...' : null}
                            {LoadingDataRound5 ? (
                              <span aria-busy="true">
                                <LoadingSpinnerComponent />
                              </span>
                            ) : round?.round === '5' ? (
                              winnersRoundFive.data?.map((winner) => (
                                <div
                                  key={randomId(8)}
                                  className="global-flex-wrapper "
                                >
                                  <div>P {winner.position}</div>
                                  <div> {winner.driver}</div>
                                  <div> {winner.number}</div>
                                </div>
                              ))
                            ) : null}
                          </div>
                        </>
                      ) : (
                        <>
                          <dir className="calendar-practice event-pending">
                            <div className="global-flex-wrapper">
                              1st practice:{' '}
                              {moment(round.FirstPractice?.date).format(
                                'MMMM Do',
                              )}{' '}
                              <sup>{round.FirstPractice?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              Qualifying:{' '}
                              {moment(round.Qualifying?.date).format('MMMM Do')}{' '}
                              <sup>{round.Qualifying?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              2nd practice:{' '}
                              {moment(round.SecondPractice?.date).format(
                                'MMMM Do',
                              )}{' '}
                              <sup>{round.SecondPractice?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              3rd practice:{' '}
                              {moment(round.ThirdPractice?.date).format(
                                'MMMM Do',
                              )}{' '}
                              <sup>{round.ThirdPractice?.time}</sup>
                            </div>
                          </dir>
                          Event: {moment(round.date).endOf('day').fromNow()}
                        </>
                      )}
                    </fieldset>
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

export default CalendarComponent;
