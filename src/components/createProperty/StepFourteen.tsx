import React from "react";
import styled from "styled-components";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
function StepFourteen() {
    return (
        <Container>
            <ScrollContainer>
                <div className="text-4xl font-bold mb-10">
                    Decide how you'll confirm reservations
                </div>
                <Border>
                    <div>
                        <div className="font-medium text-2xl mb-1">Use Instant Book</div>
                        <div className="text-base text-[#7d7c7c]">
                            Guests can book automatically.
                        </div>
                    </div>
                    <AiOutlineThunderbolt size={45} />
                </Border>
                <Border>
                    <div>
                        <div className="font-medium text-2xl mb-1">Approve or decline requests</div>
                        <div className="text-base text-[#7d7c7c]">
                            Guests must ask if they can book.
                        </div>
                    </div>
                    <TiMessages size={45} />
                </Border>
            </ScrollContainer>
        </Container>
    );
}

export default StepFourteen;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
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
    padding-bottom: 150px;
    padding-top: 7%;
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
