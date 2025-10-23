import React from 'react';
// eslint-disable-next-line max-len
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { TabsPage } from './pages/TabsPage';

const NotFound: React.FC = () => {
  document.title = 'Page not found';

  return (
    <div className="page">
      <h1>Page not found</h1>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <nav className="nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'is-active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className={({ isActive }) => (isActive ? 'is-active' : '')}
        >
          Tabs
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/tabs">
          <Route index element={<TabsPage />} />
          <Route path=":tabId" element={<TabsPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
