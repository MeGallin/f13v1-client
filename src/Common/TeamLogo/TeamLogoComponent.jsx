import { teamLogos } from '../../../src/assets/data/teamLogos';

const TeamLogoComponent = ({ team }) => {
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
        height: '62px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        border: '1px solid black',
        borderRadius: '8px',
        padding: '4px',
        backgroundColor: 'rgba(255,255,255,0.25)',
      }}
    />
  );
};

export default TeamLogoComponent;
