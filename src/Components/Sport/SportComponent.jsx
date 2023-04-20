import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sportDataAction } from '../../Store/Actions/RoundUp';
import { LoadingSpinnerComponent } from '../../Common';
import moment from 'moment';

const SportComponent = () => {
  const dispatch = useDispatch();

  const sportData = useSelector((state) => state.sportData);
  const { loading, success, feed, items } = sportData;

  console.log(items);

  useEffect(() => {
    setTimeout(function () {
      dispatch(sportDataAction());
      setInterval(function () {
        dispatch(sportDataAction());
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
          <h3>Sport News</h3>
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

export default SportComponent;
