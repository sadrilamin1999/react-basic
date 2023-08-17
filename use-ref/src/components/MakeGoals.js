import { useEffect, useRef } from "react";

const MakeGoals = () => {
  const goals = {
    arg: 3,
    bra: 3,
  };
  const argRef = useRef(null);
  const braRef = useRef(null);

  useEffect(() => {
    goals.arg > goals.bra
      ? (argRef.current.style.color = "blue")
      : (braRef.current.style.color = "green");
  }, []);

  return (
    <div>
      <h1 ref={argRef}>Argentina: {goals.arg}</h1>
      <h1 ref={braRef}>Brazil: {goals.bra}</h1>
    </div>
  );
};

export default MakeGoals;
