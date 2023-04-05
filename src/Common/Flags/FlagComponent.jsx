import { flags } from '../../../src/assets/data/flags';
const FlagComponent = ({ nationality }) => {
  const flagSrc = flags.filter((flag) => {
    if (flag.country === nationality) {
      return flag;
    }
    return false;
  });

  return (
    <img
      aria-busy="true"
      src={flagSrc[0]?.path}
      alt={nationality}
      style={{
        border: '1px solid black',
        borderRadius: '8px',
        margin: '2px',
        height: '50px',
      }}
    />
  );
};

export default FlagComponent;
