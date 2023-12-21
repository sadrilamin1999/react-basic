import React from "react";
const ShowCount = ({ count, title }) => {
  console.log(`rendering... ${count}`);
  return (
    <div>
      <h2>
        {title} is {count}
      </h2>
    </div>
  );
};

export default React.memo(ShowCount);
