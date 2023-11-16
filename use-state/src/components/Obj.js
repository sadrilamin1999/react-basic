import { useState } from "react";

const Obj = () => {
  const [obj, setObj] = useState({
    key1: "value 1",
    key2: "value 2",
    key3: "value 3",
  });

  const changeHandle = () => {
    setObj((prevObj) => ({
      ...prevObj,
      key1: "New key 1",
      key2: "New key 2",
    }));
  };
  return (
    <div>
      <h2>State for object</h2>
      <p>{obj.key1}</p>
      <p>{obj.key2}</p>
      <p>{obj.key3}</p>
      <button onClick={changeHandle}>Change</button>
    </div>
  );
};

export default Obj;
