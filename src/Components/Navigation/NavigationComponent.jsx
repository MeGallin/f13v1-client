import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationComponent.css';

const NavigationComponent = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  const handleNavigation = () => {
    setToggleHamburger((prev) => (prev = !prev));
  };
  return (
    <>
      <nav>
        <NavLink
          onClick={handleNavigation}
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
        >
          LOGO
        </NavLink>
        <div className="hamburger" onClick={handleNavigation}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        <ul className={!toggleHamburger ? 'nav_links' : 'nav_links open'}>
          <li className="link">
            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/"
              data-cy="nav-home-link"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/standings"
              data-cy="nav-standings-link"
            >
              STANDINGS
            </NavLink>
            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/calendar"
              data-cy="nav-calendar-link"
            >
              CALENDAR
            </NavLink>

            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/drivers"
              data-cy="nav-drivers-link"
            >
              DRIVERS
            </NavLink>

            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/round-up"
              data-cy="nav-roundUp-link"
            >
              ROUND UP
            </NavLink>

            <NavLink
              onClick={handleNavigation}
              className={(navData) => (navData.isActive ? 'active' : '')}
              to="/about"
              data-cy="nav-about-link"
            >
              about
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationComponent;
