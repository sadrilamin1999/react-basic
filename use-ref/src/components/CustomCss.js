import { useRef } from "react";

const CustomCss = () => {
  const headlineRef = useRef(null);

  const headlineHandler = () => {
    headlineRef.current.style.color = "green";
  };
  return (
    <div>
      <h1 ref={headlineRef} style={{ color: "red" }}>
        Hello
      </h1>
      <button onClick={headlineHandler}>Click to change</button>
    </div>
  );
};

export default CustomCss;
