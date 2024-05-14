import { FaStar } from "react-icons/fa";
import ReviewChart from "./ReviewChart";

function ReviewTitle() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center mr-3">
                    <FaStar size={25} />
                </div>
                <div className=" text-3xl font-medium">4.93 · 233 reviewssdf</div>
                {/* <ReviewChart /> */}
            </div>
        </div>
    );
}

export default ReviewTitle;
