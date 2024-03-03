import React, { useState } from "react";
import "./game.css";

function PlayGame() {
  const [items, setItems] = useState([
    { id: 1, text: "Plastic Bag", category: "nonbio" },
    { id: 2, text: "Banana Peal", category: "bio" },
    { id: 3, text: "Paper", category: "bio" },
    { id: 4, text: "Wire covering", category: "nonbio" },
    { id: 5, text: "Rotten vegitables", category: "bio" },
    { id: 6, text: "Rust metal", category: "nonbio" },
  ]);

  const [fruits, setFruits] = useState([]);
  const [vegetables, setVegetables] = useState([]);
  const [score, setScore] = useState(0);

  const handleDragStart = (event, itemId) => {
    event.dataTransfer.setData("itemId", itemId);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, category, text) => {
    const itemId = event.dataTransfer.getData("itemId");
    const draggedItem = items.find((item) => item.id === parseInt(itemId));

    if (category === draggedItem.category && text === draggedItem.text) {
      setScore((prevScore) => prevScore + 1);
    }

    if (category === "bio") {
      setFruits((prevState) => [...prevState, draggedItem]);
    } else if (category === "nonbio") {
      setVegetables((prevState) => [...prevState, draggedItem]);
    }

    const updatedItems = items.filter((item) => item.id !== parseInt(itemId));
    setItems(updatedItems);
  };

  return (
    <div className="PlayGame">
      <h1>Drag & Drop Game</h1>
      <h2>Score: {score}</h2>
      <div className="container">
        <div
          className="category"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, "bio", "Bio degradable")}
        >
          <h2>Bio degradable</h2>
          {fruits.map((item) => (
            <div
              key={item.id}
              className="item"
              draggable
              onDragStart={(event) => handleDragStart(event, item.id)}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div
          className="category"
          onDragOver={(event) => handleDragOver(event)}
          onDrop={(event) => handleDrop(event, "nonbio", "Nonbiodegradable")}
        >
          <h2>Non-Biodegradable</h2>
          {vegetables.map((item) => (
            <div
              key={item.id}
              className="item"
              draggable
              onDragStart={(event) => handleDragStart(event, item.id)}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="common-bucket" onDragOver={(event) => handleDragOver(event)}>
        <h2>Common Bucket</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            draggable
            onDragStart={(event) => handleDragStart(event, item.id)}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayGame;
