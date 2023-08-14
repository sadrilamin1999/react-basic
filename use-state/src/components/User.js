import React, { useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  const handleAddUser = () => {
    const id = user.length;
    const userNumber = Math.floor(Math.random() * 100 + 1);

    setUser([...user, { id: id, userNumber: userNumber }]);
    console.log(user);
  };
  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      {user.length > 0 &&
        user.map((singleUser) => (
          <h1 key={singleUser.id}>{singleUser.userNumber}</h1>
        ))}
    </div>
  );
};

export default User;
