import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistedBots, setEnlistedBots }) {
  return (
    <div className="BotCollection">
      <h2>Bot Collection</h2>
      <ul className="bot-collection">
        {bots.map((bot) => (
          <li key={bot.id}>
            <BotCard
              bot={bot}
              enlistedBots={enlistedBots}
              setEnlistedBots={setEnlistedBots}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BotCollection;