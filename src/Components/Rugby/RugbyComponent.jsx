import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rugbyDataAction } from '../../Store/Actions/RoundUp';

const RugbyComponent = () => {
  const dispatch = useDispatch();

  const rugbyData = useSelector((state) => state.rugbyData);
  const { loading, success, feed, items } = rugbyData;

  console.log(items);

  useEffect(() => {
    setTimeout(function () {
      dispatch(rugbyDataAction());
      setInterval(function () {
        dispatch(rugbyDataAction());
      }, 3600000); // set for 1 hour
    }, 0);
  }, [dispatch]);
  return (
    <>
      {!success ? 'Error comp pending...' : null}
      {loading ? (
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          <h3>Rugby News</h3>
          {items?.map((item) => (
            <div key={item.guid}>
              <h3>{item.title}</h3>
              <p>{item.pubDate}</p>
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default RugbyComponent;
