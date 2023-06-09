import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { footballDataAction } from '../../Store/Actions/RoundUp';
import { LoadingSpinnerComponent } from '../../Common';
import moment from 'moment';

const FootballComponent = () => {
  const dispatch = useDispatch();

  const footballData = useSelector((state) => state.footballData);
  const { loading, success, feed, items } = footballData;

  console.log(items);

  useEffect(() => {
    setTimeout(function () {
      dispatch(footballDataAction());
      setInterval(function () {
        dispatch(footballDataAction());
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
          <h3>Football News</h3>
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

export default FootballComponent;
