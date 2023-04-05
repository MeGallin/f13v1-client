import '../../Css/table.css';
import './CalendarComponent.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calendarAction } from '../../Store/Actions/CalendarActions';
import { randomId } from '../../Utils/RandomId';
import { FlagComponent, WinnersComponent } from '../../Common';
import moment from 'moment';

const CalendarComponent = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state) => state.calendar);
  const { loading, error, MRData } = calendar;

  useEffect(() => {
    //Dispatch action current year
    if (!MRData) dispatch(calendarAction(2023));
  }, [dispatch]);

  const calendarData = MRData?.RaceTable?.Races.flatMap((data) => {
    return data;
  });

  return (
    <>
      {error ? 'Error comp pending...' : null}

      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">...loading</span>
        ) : (
          <>
            <div className="calendar-container ">
              <h1>F1 Season {MRData?.RaceTable?.season}</h1>

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
                      <h3>{round.raceName}</h3>
                      {moment() > moment(round.date) ? (
                        <>
                          <div className="calendar-round-completed">
                            Over, {moment(round.date).endOf('day').fromNow()}
                          </div>
                          <div>
                            <WinnersComponent round={{ round: round?.round }} />
                          </div>
                        </>
                      ) : (
                        <>
                          <dir className="calendar-practice">
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
