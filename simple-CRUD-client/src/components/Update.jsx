/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();
  const [user, setUser] = React.useState(loadedUser);
  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log("Updating user:", { name, email });
  };

  return (
    <div>
      <h2>Update User : {loadedUser.name}</h2>
      {user ? (
        <form onSubmit={handleUpdateUser}>
          <input
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <br />
          <br />
          <input
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Update;
