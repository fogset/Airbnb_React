import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { BiUpArrowCircle } from "react-icons/bi";
function StepSixteen() {
    const [price, setPrice] = useState(0);
    const [edit, setEdit] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const handleEdit = () => {
        setEdit(!edit);
    };

    const handleShowDetail = () => {
        setShowDetail(!showDetail);
    };
    return (
        <Container>
            <ScrollContainer>
                <div>
                    <div className="text-4xl font-bold mb-2">Now, set your price</div>
                    <div className="flex flex-row">
                        <div className="text-xl text-[#7d7c7c]">you can change it anytime.</div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex mt-6 flex-col">
                        <div className="flex flex-row mb-4">
                            <div className="text-9xl font-bold">${price}</div>
                            {edit === true && (
                                <div className="flex flex-row items-end">
                                    <StyledInput
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                    <IoIosCheckmarkCircleOutline onClick={handleEdit} size={45} />
                                </div>
                            )}

                            {edit === false && (
                                <div className="flex items-end">
                                    <RoundBorder onClick={handleEdit}>
                                        <MdModeEditOutline size={25} />
                                    </RoundBorder>
                                </div>
                            )}
                        </div>
                        {showDetail === false && (
                            <div className="flex flex-row">
                                <div className="text-xl text-[#7d7c7c]">
                                    Guest price ${price * 1.2} CAD
                                </div>
                                <FaAngleDown size={30} onClick={handleShowDetail} />
                            </div>
                        )}
                        {showDetail === true && (
                            <div className="mt-10">
                                <BigBorder>
                                    <div className="text-xl">Base price ${price} CAD</div>
                                    <div className="text-xl">
                                        Guest service fee ${Math.round(price * 0.15)} CAD
                                    </div>
                                    <div className="text-xl">
                                        Taxes ${Math.round(price * 0.05)} CAD
                                    </div>
                                    <HorizontalLine />
                                    <div className="text-xl font-bold">
                                        Guest price ${price * 1.2} CAD
                                    </div>
                                </BigBorder>
                                <SmallBorder>
                                    <div className="text-xl font-bold">You earn ${price} CAD</div>
                                </SmallBorder>
                                <div className="text-xl flex justify-center">
                                    Show less
                                    <BiUpArrowCircle size={30} onClick={handleShowDetail} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </ScrollContainer>
        </Container>
    );
}

export default StepSixteen;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const ScrollContainer = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 600px;
    text-align: left;
    padding-top: 7%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const RoundBorder = styled.div`
    position: relative;
    border-radius: 100px;
    border-width: 1px;
    height: 35px;
    width: 35px;
    border-color: #958e8e;
    padding: 5px;
    margin-left: 20px;
`;
const StyledInput = styled.input`
    width: 300px;
    height: 100%;
    border-width: 3px;
    border-color: #ec6c6c;
    border-radius: 15px;
    padding: 20px;
    font-size: 65px;
`;
const BigBorder = styled.div`
    position: relative;
    border-radius: 10px;
    border-width: 3px;
    height: 200px;
    width: 300px;
    border-color: black;
    padding: 15px;
    gap: 12px;
    display: flex;
    flex-direction: column;
`;
const SmallBorder = styled.div`
    position: relative;
    border-radius: 10px;
    border-width: 3px;
    height: 50px;
    width: 300px;
    border-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 50px;
`;
const HorizontalLine = styled.div`
    background-color: gray;
    height: 0.5px;
    width: 100%;
`;
