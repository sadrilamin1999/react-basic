const users = [
  {
    fullName: "Sadril Amin",
    age: 25,
    phones: [{ home: "0176063" }, { offie: "02461541" }],
  },
  {
    fullName: "Sakil Mahamud",
    age: 25,
    phones: [{ home: " 0196063" }, { offie: "05461541" }],
  },
];

function App() {
  console.log(users);
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h1>{user.fullName}</h1>
          <h3>{user.age}</h3>
          {user.phones.map((phone, index) => (
            <div key={index}>
              <p>{phone.home}</p>
              <p>{phone.offie}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
