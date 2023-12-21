import React from "react";
const Button = ({ handleClick, increment }) => {
  console.log(`rendering ${increment}`);
  return (
    <div>
      <button onClick={handleClick}>{increment}</button>
    </div>
  );
};

export default React.memo(Button);
