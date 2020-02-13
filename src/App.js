import React, {useState, useEffect} from 'react';
import './App.css';
import leaderboardService from './services/leaderboardService';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {

  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(function() {
    leaderboardService.subscribeToUpdates(setLeaderboard);
    return function() {
      leaderboardService.unsubscribeToUpdates();
    };
  }, []);

  return (
    <div>
      <HomeScreen leaderboard={leaderboard}/>
    </div>
  );
}

export default App;
