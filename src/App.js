import './App.css';
import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]); 

  useEffect(() => {
    fetch(' http://localhost:3000/bots')
      .then((resp) => resp.json())
      .then((data) => setBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy enlistedBots={enlistedBots} releaseFromArmy={setEnlistedBots} />
      <BotCollection bots={bots} enlistedBots={enlistedBots} setEnlistedBots={setEnlistedBots} />
    </div>
  );
}

export default App;
