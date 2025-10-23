import React from 'react';
import { useParams } from 'react-router-dom';
import { Tabs } from '../components/Tabs';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'html', title: 'HTML', content: 'HTML is the structure of the web.' },
  { id: 'css', title: 'CSS', content: 'CSS styles the web.' },
  { id: 'js', title: 'JavaScript', content: 'JS makes the web interactive.' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  document.title = 'Tabs page';

  return (
    <div className="page">
      <h1>Tab page</h1>
      <Tabs tabs={tabs} activeTabId={tabId} />
    </div>
  );
};
