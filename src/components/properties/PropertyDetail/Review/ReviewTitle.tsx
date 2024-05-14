import ReviewChart from "./ReviewChart";
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
            <div className="mt-10 flex w-full">
                <div className="mr-10">
                    Overall rating
                    <ReviewChart />
                </div>
                <Container>
                    <VerticalLine />
                    <IconContainer>
                        CLeanliness
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <MdCleanHands size={45} />
                    </IconContainer>
                </Container>
                <Container>
                    <VerticalLine />
                    <IconContainer>
                        Accuracy
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <IoIosCheckmarkCircleOutline size={45} />
                    </IconContainer>
                </Container>

                <Container>
                    <VerticalLine />
                    <IconContainer>
                        Check-in
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <GrKey size={45} />
                    </IconContainer>
                </Container>
                <Container>
                    <VerticalLine />
                    <IconContainer>
                        Communication
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <BsChatSquareText size={45} />
                    </IconContainer>
                </Container>
                <Container>
                    <VerticalLine />
                    <IconContainer>
                        Location
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <FaMapLocationDot size={45} />
                    </IconContainer>
                </Container>

                <Container>
                    <VerticalLine />
                    <IconContainer>
                        Value
                        <div className="font-medium text-xl mb-5">4.9</div>
                        <RiPriceTag3Line size={45} />
                    </IconContainer>
                </Container>
            </div>
        </div>
    );
}

export default ReviewTitle;
const VerticalLine = styled.div`
    height: 140px;
    width: 2px;
    background-color: #dddddd;
    z-index: 100;
`;
const Test = styled.div`
    height: 140px;
    width: 2px;
    background-color: #bb1c1c;
    z-index: 100;
`;
const IconContainer = styled.div`
    width: 110px;
    font-weight: 500;
`;
const Container = styled.div`
    display: flex;
    width: 190px;
    gap: 30px;
    //background-color: lightblue;
`;
