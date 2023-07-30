import Child from "../src/components/Child";

const App = () => {
  const data = "Hello I am from parent";

  const handleChildData = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Child data={data} onChildData={handleChildData} />
    </div>
  );
};

export default App;
