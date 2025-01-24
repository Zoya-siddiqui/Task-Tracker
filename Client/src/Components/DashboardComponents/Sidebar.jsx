import React from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div
        className={`fixed top-0 left-0 h-full bg-white   border border-black rounded-[2rem] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:static sm:translate-x-0 w-60 md:w-60`}
      >
        <div className="mt-6 text-center font-serif text-2xl">Task Tracker</div>


        <div className="flex flex-col mt-8 text-left  space-y-4 px-4 cursor-pointer text-lg">
          <p className="bg-gray-700 text-white px-4 py-2  rounded-full transition-all duration-200 ease-in-out">
            Dashboard
          </p>
          <p className="hover:bg-gray-700 hover:text-white px-4 py-2 text-black rounded-full transition-all duration-200 ease-in-out">
            Settings
          </p>
          <p className="hover:bg-gray-700 hover:text-white px-4 py-2 text-black rounded-full transition-all duration-200 ease-in-out">
            Profile
          </p>
          <p className="hover:bg-gray-700 hover:text-white px-4 py-2 text-black rounded-full transition-all duration-200 ease-in-out">
            Logout
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
