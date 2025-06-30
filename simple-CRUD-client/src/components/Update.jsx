/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value; // Correct way to access form values
    const email = form.elements.email.value; // Correct way to access form values
    console.log("Updating user:", { name, email });
  };

  return (
    <div>
      <h2>Update User: {loadedUser.name}</h2>

      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" defaultValue={loadedUser.name} />
        <br />
        <br />
        <input type="email" name="email" defaultValue={loadedUser.email} />
        <br />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
