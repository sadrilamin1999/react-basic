const Panel = ({ title, children, isActive, onActive }) => {
  return (
    <div className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onActive}>Show</button>}
    </div>
  );
};

export default Panel;
