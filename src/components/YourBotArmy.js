import React from "react";

function YourBotArmy({ enlistedBots, releaseFromArmy }) {
  const releaseBot = (botToRelease) => {
    const updatedEnlistedBots = enlistedBots.filter(
      (bot) => bot.id !== botToRelease.id
    );
    releaseFromArmy(updatedEnlistedBots);
  };

  const groupedBots = [];

  for (let i = 0; i < enlistedBots.length; i += 3) {
    groupedBots.push(enlistedBots.slice(i, i + 3));
  }

  return (
    <div>
      <h2>Your Bot Army</h2>
      {groupedBots.map((group, index) => (
        <div key={index} className="bot-row">
          {group.map((bot) => (
            <div
              key={bot.id}
              className="bot-card enlisted"
              onClick={() => releaseBot(bot)}
            >
              <img src={bot.avatar_url} alt={bot.name} />
              <h3>{bot.name}</h3>
              <p className="catchphrase">Catchphrase: {bot.catchphrase}</p>
              <div className="bot-details">
                <p>
                  <span className="icon">🩸</span>Health: {bot.health}
                </p>
                <p>
                  <span className="icon">🔥</span>Damage: {bot.damage}
                </p>
                <p>
                  <span className="icon">🛡️</span>Armor: {bot.armor}
                </p>
                <p>
                  <span className="icon">🤖</span>Class: {bot.bot_class}
                </p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default YourBotArmy;