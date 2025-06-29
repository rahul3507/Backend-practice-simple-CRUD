/** @format */

import React from "react";
import { useLoaderData } from "react-router-dom";

export const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = React.useState(loadedUsers);

  const handleDeleteUser = (id) => {
    console.log("Deleting user with ID:", id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // Optionally, you can refetch the users or update the state to remove the user from the list
          if (data.deletedCount > 0) {
            // Update the state or re-render the component with remainingUsers
            alert("User deleted successfully!");
            const remainingUsers = users.filter((user) => user._id !== id);
            setUsers(remainingUsers);
          }
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };
  return (
    <div>
      <h2> Total Users: {users.length} </h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user._id} - {user.name} - {user.email}
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
