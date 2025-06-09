import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = useState([]); // Stores all fetched users
  const [search, setSearch] = useState(""); // Stores the search query
  const [filteredUsers, setFilteredUsers] = useState([]); // Filtered result
  const [loading, setLoading] = useState(true); // Loading state

  // 🔄 Fetch users when component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
        setFilteredUsers(data);
        console.log(data);
        
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setLoading(false);
      }
    };

    fetchUsers(); // Call the async function
  }, []); // 🔁 Empty dependency = only on first render

  // 🔍 Filter users when `search` changes
  useEffect(() => {
    const result = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(result);
  }, [search, users]); // Run this effect whenever search or users change

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>User List</h2>

      {/* 🔎 Search Input */}
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", width: "300px", marginBottom: "20px" }}
      />

      {/* ⏳ Loading */}
      {loading ? (
        <p>Loading users...</p>
      ) : filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        // 📋 Display users
        <ul>
          {filteredUsers.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
