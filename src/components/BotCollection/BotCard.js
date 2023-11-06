import React from "react";

function BotCard({ bot, enlistedBots, setEnlistedBots }) {
  const isEnlisted = enlistedBots.some(
    (enlistedBot) => enlistedBot.id === bot.id
  );

  const handleClick = () => {
    if (isEnlisted) {
      
      const updatedEnlistedBots = enlistedBots.filter(
        (enlistedBot) => enlistedBot.id !== bot.id
      );
      setEnlistedBots(updatedEnlistedBots);
    } else {
      
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div 
    className="bot-card" onClick={handleClick}>
      <h2>{bot.name}</h2>
      <p>{bot.description}</p>
      <p>Health:{bot.health}</p>
      <p>Damage:{bot.damage}</p>
      <p>Armor:{bot.armor}</p>
    </div>

    
  );
}

export default BotCard;