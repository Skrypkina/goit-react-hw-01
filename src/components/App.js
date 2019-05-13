import React from 'react';
import Profile from './Profile/Profile';
import Statss from './Stats/Statss';
import PricingPlan from './PricingPlan/PricingPlan';
import PricingJson from '../pricingPlan.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Transactions from '../transactions.json';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

const App = () => (
  <div>
    <Profile
      name={user.name}
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statss stats={stats} title="Upload stats" />
    <PricingPlan items={PricingJson} />
    <TransactionHistory items={Transactions} />
  </div>
);

export default App;
