import Profile from './Profile/Profile';
import u from './Profile/user.json';

import StatList from './Statistics/StatList';
import data from './Statistics/data.json';

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';

import s from './App.module.css';

export const App = () => {
  return (
    <div className={`${s.App} ${s.container}`}>
      <Profile
        username={u.username}
        tag={u.tag}
        location={u.location}
        avatar={u.avatar}
        stats={u.stats}
        // followers={u.stats.followers}
        // views={u.stats.views}
        // likes={u.stats.likes}
      />
      <StatList data={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory transactionsList={transactions} />
    </div>
  );
};
