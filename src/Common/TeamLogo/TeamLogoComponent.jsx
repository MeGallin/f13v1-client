import { teamLogos } from '../../../src/assets/data/teamLogos';

const TeamLogo = ({ team }) => {
  const teamLogo = teamLogos.filter((logo) => {
    if (logo.team === team) {
      return logo;
    }
    return false;
  });

  return (
    <img
      aria-busy="true"
      src={teamLogo[0]?.path}
      alt={team}
      style={{
        height: '22px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
      }}
    />
  );
};

export default TeamLogo;
