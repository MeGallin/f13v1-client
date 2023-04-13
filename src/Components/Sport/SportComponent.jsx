import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sportDataAction } from '../../Store/Actions/RoundUp';

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
        <span aria-busy="true">...loading</span>
      ) : (
        <>
          <h3>Sport News</h3>
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

export default SportComponent;
