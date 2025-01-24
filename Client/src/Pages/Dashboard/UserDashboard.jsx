import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../../Redux/Slices/AuthSlice";
import { FaBars } from "react-icons/fa";
import Sidebar from "@/Components/DashboardComponents/Sidebar";
import MainContent from "@/Components/DashboardComponents/MainContent";

const UserDashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.auth);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  console.log("this is user",user);
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col gap-x-4 sm:flex-row p-4">
      <div>
        <button
          className="sm:hidden p-2 m-2 text-xl bg-gray-700 text-white rounded-full"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <div className="flex-1 border border-black rounded-[2rem] overflow-y-auto p-4">
        <MainContent user={user}/>
      </div>
    </div>
  );
};

export default UserDashboard;
