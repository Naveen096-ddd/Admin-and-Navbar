import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminData = () => {
  const [user, setUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/users");
        const sortedData = response.data.sort((a, b) =>
          a.id.localeCompare(b.id)
        );
        setUser(sortedData);
        setAllUsers(sortedData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    const filteredUsers = allUsers.filter((u) =>
      u.name.toLowerCase().includes(query)
    );
    setUser(filteredUsers);
  };
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold mb-4">Admin Data</h1>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-2"
          onChange={handleSearch}
        />
      </div>

      <table className="w-full text-white">
        <thead>
          <tr className="bg-[#0d47a1]">
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3">Email</th>
          </tr>
        </thead>
        <tbody>
          {user && user.length > 0 ? (
            user.map((u) => (
              <tr key={u.id} className="bg-[#1a1d2f] hover:bg-[#256d77]">
                <td className="px-6 py-4">{u.id}</td>
                <td className="px-6 py-4">{u.name}</td>
                <td className="px-6 py-4">{u.age}</td>
                <td className="px-6 py-4">{u.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4 text-gray-400">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminData;
