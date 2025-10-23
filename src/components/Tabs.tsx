import React from 'react';
import { NavLink } from 'react-router-dom';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[];
  activeTabId?: string;
};

export const Tabs: React.FC<Props> = ({ tabs, activeTabId }) => {
  return (
    <div className="Tabs">
      <div className="Tabs__nav">
        {tabs.map(tab => (
          <NavLink
            key={tab.id}
            to={`/tabs/${tab.id}`}
            className={({ isActive }) =>
              'Tabs__tab' + (isActive ? ' is-active' : '')
            }
          >
            {tab.title}
          </NavLink>
        ))}
      </div>

      <div className="Tabs__content">
        {activeTabId
          ? tabs.find(tab => tab.id === activeTabId)?.content
          : 'Please select a tab.'}
      </div>
    </div>
  );
};
