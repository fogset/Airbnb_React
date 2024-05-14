import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewTitle() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center mr-3">
                    <FaStar size={25} />
                </div>
                <div className=" text-3xl font-medium">4.93 · 233 reviews</div>
            </div>
        </div>
    );
}

export default ReviewTitle;
