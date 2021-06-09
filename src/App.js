import React from 'react';

import Profile from './Components/profile/Profile';
import Statistics from './Components/statistics/Statistics';
import FriendList from './Components/friendList/FriendList';
import TransactionHistory from './Components/transactionHistory/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json'



const App = () => {
    return (
        <div>
            <Profile user={user} />
            <Statistics title="Upload stats" stats={statisticalData} />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;