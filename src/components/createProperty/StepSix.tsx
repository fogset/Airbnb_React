import styled from "styled-components";
import { useState } from "react";
import GuestImg from "./Images/SixteenGuests.png";
import { motion } from "framer-motion";
function StepSix() {
    const [guest, setGuest] = useState(1);
    const [moveX, setMoveX] = useState(0);
    function increaseGuest() {
        if (guest < 16) {
            setGuest(guest + 1);
            setMoveX(moveX + 48);
        }
    }
    function decreaseGuest() {
        if (guest > 1) {
            setGuest(guest - 1);
            setMoveX(moveX - 48);
        }
    }
    return (
        <Container>
            <Overflow>
                <div className="text-4xl font-bold mb-2">
                    What kind of nathrooms are available to guests
                </div>

                <BottomContainer>
                    <motion.div
                        className="h-[120px] w-full bg-white absolute top-[30px] left-[80px]"
                        initial={{ x: 0 }}
                        animate={{ x: moveX }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
                    />
                    <Image src={GuestImg} />
                    <div className="text-2xl">
                        How many guests can fit comfortably in your space?
                    </div>
                    <div className="flex items-center gap-[100px] text-9xl font-medium">
                        <CircleBorder onClick={decreaseGuest}>-</CircleBorder>
                        {guest}
                        <CircleBorder onClick={increaseGuest}>+</CircleBorder>
                    </div>
                </BottomContainer>
                <div className="pb-44" />
            </Overflow>
        </Container>
    );
}

export default StepSix;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const BottomContainer = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
`;
const Overflow = styled.div`
    margin-top: 10%;
    width: 55%;
    height: 70%;
`;
const CircleBorder = styled.div`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    border-color: #a8a6a6;
    border-width: 1px;
    &:hover {
        border-color: black;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    padding-bottom: 5px;
`;

const Image = styled.img`
    width: 8000px;
    height: 100%;
`;
