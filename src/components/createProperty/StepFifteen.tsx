import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function StepFifteen() {
    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const handleChangeOne = () => {
        setCheckedOne(true);
        setCheckedTwo(false);
    };

    const handleChangeTwo = () => {
        setCheckedTwo(true);
        setCheckedOne(false);
    };
    return (
        <Container>
            <ScrollContainer>
                <div>
                    <div className="text-4xl font-bold mb-2">
                        Choose who to welcome for your first reservation
                    </div>
                    <div className="flex flex-row">
                        <div className="text-xl text-[#7d7c7c]">
                            After your first guest, anyone can book your place.&nbsp;
                        </div>
                        <div className="text-xl underline"> learn more</div>
                    </div>
                </div>
                <Border onClick={handleChangeOne}>
                    {checkedOne ? <SelectedCheckBox /> : <EmptyCheckBox />}
                    <div>
                        <div className="font-medium text-2xl mb-1">Any Airbnb guest</div>
                        <div className="text-base text-[#7d7c7c]">
                            Get reservations faster when you welcome anyone from the Airbnb
                            community.
                        </div>
                    </div>
                </Border>
                <Border onClick={handleChangeTwo}>
                    {checkedTwo ? <SelectedCheckBox /> : <EmptyCheckBox />}
                    <div className="ml-20">
                        <div className="font-medium text-2xl mb-1">An experienced guest</div>
                        <div className="text-base text-[#7d7c7c] ">
                            For your first guest, welcome someone with a good track record on Airbnb
                            who can offer tops for how to be a great Host.
                        </div>
                    </div>
                </Border>
            </ScrollContainer>
        </Container>
    );
}

export default StepFifteen;
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
    position: relative;
    border-radius: 10px;
    border-width: 1px;
    height: 200px;
    width: 50%;
    border-color: gray;
    display: flex;
    align-items: center;
    padding: 22px;
    justify-content: center;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
`;
const SelectedCheckBox = styled.div`
    position: absolute;
    left: 10px;
    border-width: 10px;
    border-radius: 50%;
    border-color: black;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
    height: 30px;
    width: 30px;
`;
const EmptyCheckBox = styled.div`
    position: absolute;
    left: 10px;
    border-width: 1px;
    border-radius: 50%;
    border-color: gray;
    &:hover {
        border-color: black;
        border-width: 2px;
    }
    height: 30px;
    width: 30px;
`;
