import { useState } from "react";
import "../styles/userData.css";

const userData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

export const Users = () => {
  const [users, setUsers] = useState(userData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    if (username && email) {
      setUsers([...users, { username, email }]);
      setUsername("");
      setEmail("");
    }
  };

  return (
    <section className="users">
      <h2>Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.username} ({user.email})
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddUser}>
        <h3>Add new user</h3>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button id="userBtn" type="submit">
          Add user
        </button>
      </form>
    </section>
  );
};
