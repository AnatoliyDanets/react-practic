// import logo from './logo.svg';
import './App.css';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
function App() {
  return (
    <div>
      <FriendList friends={friends} />
   </div>
  );
}

export default App;
