import React,{useState} from "react";
import "tailwindcss/tailwind.css";
import AdminData from "./AdminData";
const Admin = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const Dummy_Api = "http://localhost:3001/users";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name,
      age,
      email,
    };
    try {
      const response = await fetch(Dummy_Api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        alert("User data submitted successfully!");
        setName("");
        setAge("");
        setEmail("");
      } else {
        alert("Failed to submit user data!");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-600 to-indigo-900 p-6">
    <form className="bg-gradient-to-br from-[#00f7ff]/70 via-[#0066ff]/70 to-[#8a2be2]/70 backdrop-blur-xl h-96 w-96 p-8 rounded-2xl shadow-2xl shadow-blue-500/40 border border-white/20 h-auto" onSubmit={handleSubmit}>
      <h2 className="text-4xl font-extrabold text-white mb-6">Admin Page</h2>
      <label className="text-xl text-white" htmlFor="name">Name:</label>
      <input
        type="text"
        name="name"
        className="border border-white/40 bg-white/20 text-white rounded px-4 py-3 mt-2 mb-4 w-full focus:outline-none"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required
      />

      <label className="text-xl text-white" htmlFor="age">Age:</label>
      <input
        type="number"
        name="age"
        className="border border-white/40 bg-white/20 text-white rounded px-4 py-3 mt-2 mb-4 w-full focus:outline-none"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
        required
      />

      <label className="text-xl text-white" htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        className="border border-white/40 bg-white/20 text-white rounded px-4 py-3 mt-2 w-full focus:outline-none"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        required
      />
      <div className="flex justify-center mt-6">
        <button className="bg-gradient-to-br from-[#00f7ff]/70 via-[#0066ff]/70 to-[#8a2be2]/70 text-white font-bold py-2 px-6 rounded hover:opacity-90 transition duration-200">
          Submit
        </button>
      </div>
    </form>

  </div>
  <AdminData/>
  </>
  );
};

export default Admin;
