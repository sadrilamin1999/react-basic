import useFetch from "../hooks/CustomHooks/useFetch";

const Users = () => {
  const {
    data: users,
    isLoading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {isLoading && <p>Loading...</p>}

      {error ? (
        <p>{error}</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h2>Name: {user.name}</h2>
          </div>
        ))
      )}
    </div>
  );
};

export default Users;
