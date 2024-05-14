import ReviewChart from "./Review/ReviewChart";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";
import { MdCleanHands } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GrKey } from "react-icons/gr";
import { BsChatSquareText } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { RiPriceTag3Line } from "react-icons/ri";
function ReviewTitle() {
    return (
        <div>
            <div className="flex">
                <div className="flex items-center mr-3">
                    <FaStar size={25} />
                </div>
                <div className=" text-3xl font-medium">4.93 · 233 reviews</div>
            </div>
            <div className="mt-10 flex gap-10">
                <div>
                    Overall rating
                    <ReviewChart />
                </div>
                <VerticalLine />
                <IconContainer>
                    CLeanliness
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <MdCleanHands size={45} />
                </IconContainer>
                <VerticalLine />
                <IconContainer>
                    Accuracy
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <IoIosCheckmarkCircleOutline size={45} />
                </IconContainer>
                <VerticalLine />
                <IconContainer>
                    Check-in
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <GrKey size={45} />
                </IconContainer>
                <VerticalLine />
                <IconContainer>
                    Communication
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <BsChatSquareText size={45} />
                </IconContainer>
                <VerticalLine />
                <IconContainer>
                    Location
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <FaMapLocationDot size={45} />
                </IconContainer>
                <VerticalLine />
                <IconContainer>
                    Value
                    <div className="font-medium text-xl mb-5">4.9</div>
                    <RiPriceTag3Line size={45} />
                </IconContainer>
            </div>
        </div>
    );
}

export default ReviewTitle;
const VerticalLine = styled.div`
    margin-top: 0px;
    height: 140px;
    width: 2px;
    background-color: #dddddd;
`;
const IconContainer = styled.div`
    width: 110px;
`;
