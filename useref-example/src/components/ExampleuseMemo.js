import React, { useState, useMemo } from "react";

const sampleUsers = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 22 },
  { id: 4, name: "David", age: 35 },
  { id: 5, name: "Eva", age: 28 },
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = useMemo(() => {
    console.log("Filtered users function");
    return sampleUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const sortedUsers = useMemo(() => {
    console.log("Sorted users function");
    return [...filteredUsers].sort((a, b) => {
      return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
    });
  }, [filteredUsers, sortOrder]);

  return (
    <div>
      <h1>User Management Dashboard</h1>
      <input
        type="text"
        placeholder="Search users by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
        <option value="asc">Sort by Age (Ascending)</option>
        <option value="desc">Sort by Age (Descending)</option>
      </select>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
