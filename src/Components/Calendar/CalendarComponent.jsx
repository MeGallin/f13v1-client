import "../../Css/table.css";
import "./CalendarComponent.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  calendarAction,
  winnersRoundOneAction,
  winnersRoundThreeAction,
  winnersRoundTwoAction,
} from "../../Store/Actions/CalendarActions";
import { randomId } from "../../Utils/RandomId";
import {
  FlagComponent,
  ImageSliderComponent,
  WinnersComponent,
} from "../../Common";
import moment from "moment";

const CalendarComponent = () => {
  const dispatch = useDispatch();

  const calendar = useSelector((state) => state.calendar);
  const { loading, error, MRData } = calendar;

  const winnersRoundOne = useSelector((state) => state.winnersRoundOne);
  const { data: dataRound1 } = winnersRoundOne;

  const winnersRoundTwo = useSelector((state) => state.winnersRoundTwo);
  const { data: dataRound2 } = winnersRoundTwo;

  const winnersRoundThree = useSelector((state) => state.winnersRoundThree);
  const { data: dataRound3 } = winnersRoundThree;

  useEffect(() => {
    //Dispatch action current year
    if (!MRData) dispatch(calendarAction(2023));
    if (!dataRound1) dispatch(winnersRoundOneAction(1));
    if (!dataRound2) dispatch(winnersRoundTwoAction(2));
    if (!dataRound3) dispatch(winnersRoundThreeAction(3));
  }, [dispatch]);

  const calendarData = MRData?.RaceTable?.Races.flatMap((data) => data);

  return (
    <>
      {error ? "Error comp pending..." : null}
      <ImageSliderComponent />
      <fieldset className="fieldSet">
        <legend></legend>
        {loading ? (
          <span aria-busy="true">...loading</span>
        ) : (
          <>
            <div className="calendar-container ">
              <div className="calendar-feature">
                {calendarData?.map((round) => (
                  <div key={randomId(8)} className="calendar-item">
                    <fieldset className="fieldSet ">
                      <h3>F1 Season {MRData?.RaceTable?.season}</h3>
                      <legend>Round {round.round}</legend>
                      <div className="global-flex-wrapper">
                        <div>
                          <div className="calendar-date-wrapper">
                            {moment(round.date).format("MMM Do")}
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
                            Event ended,{" "}
                            {moment(round.date).endOf("day").fromNow()}
                          </div>
                          <h3>Podium</h3>
                          <div>
                            {round?.round === "1"
                              ? winnersRoundOne.data?.map((winner) => (
                                  <div
                                    key={randomId(8)}
                                    className="global-flex-wrapper calendar-practice"
                                  >
                                    <div>P {winner.position}</div>
                                    <div> {winner.driver}</div>
                                    <div> {winner.number}</div>
                                  </div>
                                ))
                              : null}
                            {round?.round === "2"
                              ? winnersRoundTwo.data?.map((winner) => (
                                  <div
                                    key={randomId(8)}
                                    className="global-flex-wrapper calendar-practice"
                                  >
                                    <div>P {winner.position}</div>
                                    <div> {winner.driver}</div>
                                    <div> {winner.number}</div>
                                  </div>
                                ))
                              : null}
                            {round?.round === "3"
                              ? winnersRoundThree.data?.map((winner) => (
                                  <div
                                    key={randomId(8)}
                                    className="global-flex-wrapper calendar-practice"
                                  >
                                    <div>P {winner.position}</div>
                                    <div> {winner.driver}</div>
                                    <div> {winner.number}</div>
                                  </div>
                                ))
                              : null}
                          </div>
                        </>
                      ) : (
                        <>
                          <dir className="calendar-practice">
                            <div className="global-flex-wrapper">
                              1st practice:{" "}
                              {moment(round.FirstPractice?.date).format(
                                "MMMM Do"
                              )}{" "}
                              <sup>{round.FirstPractice?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              Qualifying:{" "}
                              {moment(round.Qualifying?.date).format("MMMM Do")}{" "}
                              <sup>{round.Qualifying?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              2nd practice:{" "}
                              {moment(round.SecondPractice?.date).format(
                                "MMMM Do"
                              )}{" "}
                              <sup>{round.SecondPractice?.time}</sup>
                            </div>
                            <div className="global-flex-wrapper">
                              3rd practice:{" "}
                              {moment(round.ThirdPractice?.date).format(
                                "MMMM Do"
                              )}{" "}
                              <sup>{round.ThirdPractice?.time}</sup>
                            </div>
                          </dir>
                          Event: {moment(round.date).endOf("day").fromNow()}
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
