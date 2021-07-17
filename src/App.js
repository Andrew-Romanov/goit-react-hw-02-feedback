import { Component } from 'react';
import MainContainer from './components/MainContainer';
import PageHeader from './components/PageHeader';
import Feedback from './components/Feedback';
// import Subheader from './components/Subheader/Subheader';
// import Profile from './components/Profile/Profile';
// import userData from './components/Profile/user.json';
// import Statistics from './components/Statistics/Statistics';
// import statisticalData from './components/Statistics/statistical-data.json';
// import FriendList from './components/FriendList/FriendList';
// import friendsData from './components/FriendList/friends.json';
// import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import transactionsData from './components/TransactionHistory/transactions.json';

class App extends Component {
  render() {
    return (
      <MainContainer>
        <PageHeader>React Homework 02. Feedback</PageHeader>
        <Feedback />

        {/* <Subheader>Task 1. Social Network Profile</Subheader>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />

        <Subheader>Task 2. Statistics Section</Subheader>
        <Statistics title="Upload Stats" stats={statisticalData} />

        <Subheader>Task 3. Friends List</Subheader>
        <FriendList friendsData={friendsData} />

        <Subheader>Task 4. Transaction History</Subheader>
        <TransactionHistory transactionsData={transactionsData} /> */}
      </MainContainer>
    );
  }
}

export default App;
