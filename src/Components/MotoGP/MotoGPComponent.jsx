import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motoGPDataAction } from '../../Store/Actions/RoundUp';
import { LoadingSpinnerComponent } from '../../Common';
import moment from 'moment';

const MotoGPComponent = () => {
  const dispatch = useDispatch();

  const motoGPData = useSelector((state) => state.motoGPData);
  const { loading, success, feed, items } = motoGPData;

  console.log(items);

  useEffect(() => {
    setTimeout(function () {
      dispatch(motoGPDataAction());
      setInterval(function () {
        dispatch(motoGPDataAction());
      }, 3600000); // set for 1 hour
    }, 0);
  }, [dispatch]);
  return (
    <>
      {!success ? 'Error comp pending...' : null}
      {loading ? (
        <span aria-busy="true">
          {' '}
          <LoadingSpinnerComponent />
        </span>
      ) : (
        <>
          <h3>MotoGP News</h3>
          {items?.map((item) => (
            <div key={item.guid}>
              <h3>{item.title}</h3>
              <p style={{ fontSize: '0.7em' }}>
                {moment(item.pubDate).format('DD-MM-YY hh:mm')}
              </p>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default MotoGPComponent;
