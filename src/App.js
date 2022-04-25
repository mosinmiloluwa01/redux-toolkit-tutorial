import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import "./App.css";
import { addUser, deleteUser, updateUsername } from "./features/users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");
  return (
    <div className="App">
      {""}
      <div className="addUser">
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          onClick={() => {
            dispatch(addUser({ id: userList.length + 1, name, username }));
          }}
        >
          Add User
        </button>
      </div>
      <div className="displayUsers">
        {userList.map((user) => (
          <div>
            <h1 key={user.id}>{user.name}</h1>
            <h1>{user.username}</h1>
            <input
              type="text"
              placeholder="New Username..."
              onChange={(event) => setNewUsername(event.target.value)}
            />
            <button
              onClick={() => {
                dispatch(
                  updateUsername({ id: user.id, username: newUsername })
                );
              }}
            >
              Update
            </button>
            <button
              onClick={() => {
                dispatch(deleteUser({ id: user.id }));
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
