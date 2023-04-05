import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const WinnersComponent = ({ round }) => {
  console.log(round);
  const dispatch = useDispatch();

  useEffect(() => {
    //Dispatch Action
    //Date and round
  }, []);
  return <div>Winners to Follow!</div>;
};

export default WinnersComponent;
