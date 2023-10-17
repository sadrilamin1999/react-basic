const Country = () => {
  const cities = ["Bangladesh", "Pakisthan", "Japan", "China"];
  return (
    <div>
      <ul>
        {cities.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Country;
