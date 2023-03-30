import { useEffect, useState } from 'react';
import moment from 'moment';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDateTime(moment().format('MMMM Do YYYY, h:mm a'));
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return <>{dateTime ? <>{dateTime}</> : <div aria-busy="true"></div>}</>;
};

export default DateTime;
