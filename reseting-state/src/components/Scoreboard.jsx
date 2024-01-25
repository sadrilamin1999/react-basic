import React, { useState } from "react";
import Counter from "./Counter";

const Scoreboard = () => {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>
      {isPlayerA ? (
        <Counter key="Tailor" person="Tailor" />
      ) : (
        <Counter key="Sarah" person="Sarah" />
      )}

      <button
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next player!
      </button>
    </div>
  );
};

export default Scoreboard;
