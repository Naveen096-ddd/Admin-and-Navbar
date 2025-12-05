import { useState } from "react";
import Admin from "../pages/Admin";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light-blue");
  const toggleTheme = () => {
    setTheme(theme === "light-blue" ? "light-navy" : "light-blue");
  };

  return (
    <>
    <nav className={`fixed top-0 left-0 right-0 z-50 ${theme === "light-blue" ? "bg-[#ADD8E6]" : "bg-[#032B44]"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center text-white font-bold">
            Navbar
          </div>
          <div className="hidden md:flex md:space-x-8 items-center">
            <a href="#" className="text-white hover:text-blue-500">Home</a>
            <a href="#" className="text-white hover:text-blue-500">About</a>
            <a href="#" className="text-white hover:text-blue-500">Contact</a>
            <button
              onClick={toggleTheme}
              className="ml-4 px-3 py-1 rounded bg-blue-200 text-white"
            >
              {theme === "light-blue" ? "Light Navy" : "Light Blue"}
            </button>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-[#032B44]">
          <a href="#" className="block text-white hover:text-blue-500">Home</a>
          <a href="#" className="block text-white hover:text-blue-500">About</a>
          <a href="#" className="block text-white hover:text-blue-500">Contact</a>
          <button
            onClick={toggleTheme}
            className="w-full text-left px-3 py-1 rounded bg-blue-200 text-white"
          >
            {theme === "light-blue" ? "Light Navy" : "Light Blue"}
          </button>
        </div>
      )}
    </nav>
    <Admin/>
    </>
  );
};

export default Navbar;

