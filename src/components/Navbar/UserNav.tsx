import React from "react";
import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
function UserNav() {
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center px-0.5 gap-2">
                <IoMdMenu size={25} />
                <FaUserCircle size={35} />
            </button>
        </div>
    );
}

export default UserNav;
