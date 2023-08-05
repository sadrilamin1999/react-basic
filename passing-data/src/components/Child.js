const Child = (props) => {
  const old = 23;
  props.dataReciver(old);
  return (
    <div>
      <h1>I am child</h1>
    </div>
  );
};

export default Child;
