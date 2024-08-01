import { useState } from "react";
import styled from "styled-components";

function StepSeventeen() {
    const [promotionNew, setPromotionNew] = useState(false);
    const [weekDiscount, setWeekDiscount] = useState(false);
    const [monthDiscount, setMonthDiscount] = useState(false);
    const handlePromotion = () => {
        setPromotionNew(!promotionNew);
    };
    const handleWeekDiscount = () => {
        setWeekDiscount(!weekDiscount);
    };
    const handleMonthDiscount = () => {
        setMonthDiscount(!monthDiscount);
    };
    return (
        <Container>
            <ScrollContainer>
                <div className="mb-2">
                    <div className="text-4xl font-bold mb-2">Add discounts</div>
                    <div className="flex flex-row">
                        <div className="text-xl text-[#7d7c7c]">
                            Help your place stand out to get booked faster and earn your first
                            reviews
                        </div>
                    </div>
                </div>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <div className="text-2xl font-bold flex items-center">20%</div>
                        <div className="ml-7">
                            <div className="font-medium text-2xl mb-1">New listing promotion</div>
                            <div className="text-base text-[#7d7c7c]">
                                Offer 20% off your first 3 bookings
                            </div>
                        </div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput
                                type="checkbox"
                                checked={promotionNew}
                                onChange={handlePromotion}
                            />
                        </div>
                    </div>
                </Border>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <SmallBorder>10%</SmallBorder>
                        <div className="ml-7">
                            <div className="font-medium text-2xl mb-1">Weekly discount</div>
                            <div className="text-base text-[#7d7c7c]">
                                For stays of 7 nights or more
                            </div>
                        </div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput
                                type="checkbox"
                                checked={weekDiscount}
                                onChange={handleWeekDiscount}
                            />
                        </div>
                    </div>
                </Border>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <SmallBorder>15%</SmallBorder>
                        <div className="ml-7">
                            <div className="font-medium text-2xl mb-1">Monthly discount</div>
                            <div className="text-base text-[#7d7c7c]">
                                For stays of 28 nights or more
                            </div>
                        </div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput
                                type="checkbox"
                                checked={monthDiscount}
                                onChange={handleMonthDiscount}
                            />
                        </div>
                    </div>
                </Border>
                <div className="mb-12" />
            </ScrollContainer>
        </Container>
    );
}

export default StepSeventeen;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const ScrollContainer = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 600px;
    padding-top: 7%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Border = styled.div`
    border-radius: 10px;
    border-width: 1px;
    height: 200px;
    width: 95%;
    border-color: gray;
    background-color: F7F7F7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
`;
const SmallBorder = styled.div`
    border-radius: 10px;
    border-width: 1px;
    height: 45px;
    width: 45px;
    border-color: #0e0d0d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
`;
const StyleInput = styled.input`
    width: 30px;
    height: 30px;
`;
