import { useState, useCallback } from "react";
import Title from "./components/Title";
import ShowCount from "./components/ShowCount";
import Button from "./components/Button";

const App = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);
  const incrementByFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);
  return (
    <div>
      <Title />
      <ShowCount count={count1} title="Count1" />
      <Button handleClick={incrementByOne} increment="IncrementByOne" />

      <hr />
      <ShowCount count={count2} title="Count2" />
      <Button handleClick={incrementByFive} increment="IncrementByFive" />
    </div>
  );
};

export default App;
