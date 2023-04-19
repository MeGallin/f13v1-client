import { useEffect, useState } from 'react';
import moment from 'moment';
import LoadingSpinnerComponent from '../LoadingSpinner/LoadingSpinnerComponent';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm a'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      {dateTime ? (
        <>{dateTime}</>
      ) : (
        <div aria-busy="true">
          {' '}
          <LoadingSpinnerComponent />
        </div>
      )}
    </>
  );
};

export default DateTime;
