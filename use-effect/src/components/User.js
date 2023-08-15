import { useEffect, useState } from "react";

const User = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/usersaa"
      );
      if (!response.ok) throw new Error("Something went wrong!");
      const data = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {isLoading ? <p>Loading...</p> : null}
      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => {
          return (
            <div key={user.id}>
              <h1>{user.name}</h1>
              <p>{user.email}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default User;
