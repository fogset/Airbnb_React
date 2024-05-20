import React from "react";
import styled from "styled-components";
import { FaHouse } from "react-icons/fa6";
import { MdOutlineDoorFront } from "react-icons/md";
import { FaSlideshare } from "react-icons/fa";
function StepThree() {
    return (
        <Container>
            <ScrollContainer>
                <div className="text-4xl font-bold mb-10">What type of place will guests have?</div>
                <Border>
                    <div>
                        <div className="font-medium text-2xl mb-1">An entire place</div>
                        <div className="text-base text-[#7d7c7c]">
                            Guests have the whole palce to themselves.
                        </div>
                    </div>
                    <FaHouse size={45} />
                </Border>
                <Border>
                    <div>
                        <div className="font-medium text-2xl mb-1">An room</div>
                        <div className="text-base text-[#7d7c7c]">
                            Guests have their own room in a home, plus access to shared spaces.
                        </div>
                    </div>
                    <MdOutlineDoorFront size={45} />
                </Border>
                <Border>
                    <div>
                        <div className="font-medium text-2xl mb-1">An shared room</div>
                        <div className="text-base text-[#7d7c7c]">
                            Guests sleep in a room or common area that may be shared with you or
                            others
                        </div>
                    </div>
                    <FaSlideshare size={45} />
                </Border>
            </ScrollContainer>
        </Container>
    );
}

export default StepThree;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
const ScrollContainer = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 500px;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding-bottom: 50px;
    padding-top: 50px;
`;
const Border = styled.div`
    border-radius: 10px;
    border-width: 1px;
    height: 200px;
    width: 50%;
    border-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
`;
