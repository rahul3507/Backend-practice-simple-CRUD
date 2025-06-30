/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdateUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    console.log("Updating user:", { name, email });
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser), // Send name and email directly
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("User updated:", data);
      });
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
