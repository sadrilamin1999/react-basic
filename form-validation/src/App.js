import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name);
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label>Name: </label>
        <input
          type="text"
          placeholder="type your name"
          onChange={nameChangeHandler}
        />
        {/* <label>Name: </label>
        <input
          onChange={emailChangeHandler}
          type="email"
          placeholder="type your name"
        />
        <label>Password: </label>
        <input
          onChange={passChangeHandler}
          type="password"
          placeholder="enter your password"
        /> */}
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
