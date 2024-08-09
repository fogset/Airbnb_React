import { useState } from "react";
import styled from "styled-components";
import logo from "./Images/TellUsPlace.png";
import { FaRegCalendarCheck, FaRegCalendar, FaStar } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
function StepNineteen() {
    return (
        <Container>
            <ScrollContainer>
                <div className="mb-2">
                    <div className="text-4xl font-bold mb-8">Review your listing</div>
                    <div className="flex flex-row">
                        <div className="text-xl text-[#7d7c7c]">
                            Here's what we'll show to guests. Make sure everything looks good.
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full relative">
                    <Border>
                        <Image src={logo} />
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <div className="font-medium text-lg">dsfsadf</div>
                                <div className="font-medium text-lg">$80 night</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="font-medium text-lg">New</div>
                                <div className="flex justify-center items-start mt-2 ml-2">
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </Border>

                    <div className="ml-24 mt-4">
                        <div className="text-3xl font-bold flex items-center">What's next?</div>
                        <div className="flex flex-row mt-4 w-2/3">
                            <FaRegCalendarCheck size={50} />
                            <div className="ml-5">
                                <div className="font-medium text-xl mb-1">
                                    Confirm a few details and publish
                                </div>
                                <div className="text-base text-[#7d7c7c]">
                                    We’ll let you know if you need to verify your identity or
                                    register with the local government.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4 w-2/3">
                            <FaRegCalendar size={50} />
                            <div className="ml-5">
                                <div className="font-medium text-xl mb-1">Set up your calendar</div>
                                <div className="text-base text-[#7d7c7c]">
                                    Choose which dates your listing is available. It will be visible
                                    24 hours after you publish
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row mt-4 w-2/3">
                            <GoPencil size={50} />
                            <div className="ml-5">
                                <div className="font-medium text-xl mb-1">Adjust your settings</div>
                                <div className="text-base text-[#7d7c7c]">
                                    Set house rules, select a cancellation policy, choose how guests
                                    book, and more.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-12" />
            </ScrollContainer>
        </Container>
    );
}

export default StepNineteen;
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

const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-left: 10px;
`;
const Border = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 22px;
    margin-left: 10px;
`;
