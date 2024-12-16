import React, { useState } from "react";
import "./App.css";

const itemData = {
  weapons: [
    { name: "Ak-47", rarity: "Common" },
    { name: "M416", rarity: "Rare" },
    { name: "AWM", rarity: "Legendary" },
  ],
  consumables: [
    {
      name: "Medkit",
      rarity: "Common",
    },
    {
      name: "Energy Drink",
      rarity: "UnCommon",
    },
    {
      name: "Grenade",
      rarity: "Rare",
    },
  ],
  materials: [
    {
      name: "Level 2 Helmet",
      rarity: "Common",
    },
    {
      name: "Level 3 Helmet",
      rarity: "Rare",
    },
    {
      name: "Ghillie Suit",
      rarity: "Legendary",
    },
  ],
};

function SlotMachine() {
  const [rewards, setRewards] = useState([]);
  const [spinning, setSpinning] = useState(false);
  const spinReels = () => {
    setSpinning(true);
    setTimeout(() => {
      const rewardSet = [];
      for (let i = 0; i < 3; i++) {
        const itemType =
          Object.keys(itemData)[
            Math.floor(Math.random() * Object.keys(itemData).length)
          ];
        const randomItem =
          itemData[itemType][
            Math.floor(Math.random() * itemData[itemType].length)
          ];
        rewardSet.push({
          ...randomItem,
          count: Math.floor(Math.random() * 3) + 1,
        });
      }
      setRewards(rewardSet);
      setSpinning(false);
    }, 1000);
  };

  return (
    <div className="slot-machine">
      <div className="reels">
        {rewards.map((item, index) => (
          <div key={index} className={`reel ${spinning ? "spinning" : ""}`}>
            <div className="item">{item.name}</div>
            <div className="rarity">{item.rarity}</div>
            <div className="count">{item.count}</div>
          </div>
        ))}
      </div>
      <button onClick={spinReels} disabled={spinning}>
        Spin
      </button>
      {rewards.length > 0 && (
        <div className="rewards">
          <h2>Rewards</h2>
          <ul>
            {rewards.map((item) => (
              <li key={item.name}>
                {item.name} ({item.rarity}): x{item.count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SlotMachine;
