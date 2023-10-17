const App = () => {
  const status = false;
  return (
    <div>{status ? <button>Log in</button> : <button>Log out</button>}</div>
  );
};

export default App;
