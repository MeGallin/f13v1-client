import { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FooterView from './Views/Footer/FooterView';
import HeaderView from './Views/Header/HeaderView';

const ErrorView = lazy(() => import('./Views/Error/ErrorView'));
const HomeView = lazy(() => import('./Views/Home/HomeView'));
const AboutView = lazy(() => import('./Views/About/AboutView'));
const CalendarView = lazy(() => import('./Views/Calendar/CalendarView'));
const DriversView = lazy(() => import('./Views/Drivers/DriversView'));

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <HeaderView />
        <Suspense fallback={<div aria-busy="true">Loading please wait…</div>}>
          <div className="content_height_adjuster">
            <Routes>
              <Route path="/" element={<HomeView />} exact />
              <Route path="/about" element={<AboutView />} exact />
              <Route path="/calendar" element={<CalendarView />} exact />
              <Route path="/drivers" element={<DriversView />} exact />
              <Route path="*" element={<ErrorView />} exact />
            </Routes>
          </div>
          <FooterView />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
