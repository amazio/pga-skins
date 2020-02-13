import React, {useState, useEffect} from 'react';
import './App.css';
import tourneyService from './services/tourneyService';
import HomeScreen from './screens/HomeScreen/HomeScreen';

function App() {

  const [tourney, setTourney] = useState([]);

  useEffect(function() {
    tourneyService.subscribeToUpdates(setTourney);
    return function() {
      tourneyService.unsubscribeToUpdates();
    };
  }, []);

  return (
    <div>
      <HomeScreen leaderboard={tourney.leaderboard}/>
    </div>
  );
}

export default App;
