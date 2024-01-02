import Profile from "./components/profile/profile";
import Statistic from "./components/statistic/statistic";
import Friends from "./components/friends/friends";
import Transation from "./components/transactions/transation";


import user from "./data/user.json";
import stat from './data/data.json'
import friends from './data/friends.json'
import transactions from './data/transactions.json'

function App() {
  const { username, tag, location, avatar } = user;
  const { followers, views, likes } = user.stats;
  return (
    <div className="App">
      <Profile
        props={{ username, tag, location, avatar, followers, views, likes }}
      />
      <Statistic title="hello" stats={stat} />
      <Statistic stats={stat} />
      <Friends props={friends} />
      <Transation props={transactions} />
    </div>
  );
}

export default App;
