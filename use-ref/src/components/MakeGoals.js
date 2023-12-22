import { useEffect, useRef } from "react";

const MakeGoals = () => {
  const goals = {
    arg: 0,
    bra: 1,
  };
  const argRef = useRef(null);
  const braRef = useRef(null);

  useEffect(() => {
    if (goals.arg > goals.bra) {
      argRef.current.style.color = "blue";
    }
    if (goals.bra > goals.arg) {
      braRef.current.style.color = "green";
    }
    if (goals.arg === goals.bra) {
      argRef.current.style.color = "yellow";
      braRef.current.style.color = "yellow";
    }
  }, []);

  return (
    <div>
      <h1>Make goal</h1>
      <h1 ref={argRef}>Argentina: {goals.arg}</h1>
      <h1 ref={braRef}>Brazil: {goals.bra}</h1>
    </div>
  );
};

export default MakeGoals;
