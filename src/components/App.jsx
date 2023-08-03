import { Profile } from "./Profile/Profile"
import profileUserData from "../components/Profile/user.json";
import { Statistics } from "./Statistics/Statistics";
import statisticsData from "../components/Statistics/data.json"
import { FriendList } from "./FriendList/FriendList";
import friendListData from "../components/FriendList/friends.json"
import { TransactionList } from "./TransactionHistory/TransactionHistory";
import transactionListData from "../components/TransactionHistory/transactions.json"

export const App = () => {
  return (
    <>
      <Profile items={profileUserData} />
      <Statistics items={statisticsData} />
      <FriendList items={friendListData} />
      <TransactionList items={transactionListData}/>
    </>
  );
};
