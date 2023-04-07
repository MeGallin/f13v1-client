import './TickerComponent.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { f1TickerDataAction } from '../../Store/Actions/TickerActions';
import { randomId } from '../../Utils/RandomId';

const TickerComponent = () => {
  const dispatch = useDispatch();

  const f1TickerData = useSelector((state) => state.f1TickerData);
  const { loading, success, items } = f1TickerData;

  useEffect(() => {
    setTimeout(function () {
      dispatch(f1TickerDataAction());
      setInterval(function () {
        dispatch(f1TickerDataAction());
      }, 3600000); // set for 1 hour
    }, 0);
  }, [dispatch]);

  return (
    <>
      {!success ? 'Error comp pending...' : null}
      {loading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <div className="ticker-wrapper">
          <div className="ticker">
            {items?.map((item) => (
              <div className="ticker__item" key={item.guid}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TickerComponent;
