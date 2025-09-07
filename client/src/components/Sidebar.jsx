import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";

const Sidebar = ({ sidebar, setSidebar }) => {
  const { user } = useUser();
  const { signOut, openUserProfile } = useState();
  return (
    <div
      className={`w-60 bg-white border-r border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-14 bottom-0 ${
        sidibar ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="my-7 w-full">
        <img src={user.imageUrl} alt="" className="w-13 rounded-full mx-auto" />
      </div>
    </div>
  );
};

export default Sidebar;
