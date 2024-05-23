import styled from "styled-components";
import { useState } from "react";
function StepSix() {
    const [guest, setGuest] = useState(1);

    return (
        <Container>
            <Title>
                <div className="text-4xl font-bold mb-10">
                    How many guests fit comfortably in your place?
                </div>

                <div className="flex flex-col justify-center items-center gap-12">
                    <Image src="https://a0.muscache.com/im/pictures/mediaverse/MYS%20Number%20of%20Guests/original/2432a97a-7d97-4815-aea5-5541a342ac62.png" />
                    <div className="text-2xl">
                        How many guests can fit comfortably in your space?
                    </div>
                    <div className="flex items-center gap-[100px] text-9xl">
                        <CircleBorder onClick={() => setGuest(guest - 1)}>-</CircleBorder>
                        {guest}
                        <CircleBorder onClick={() => setGuest(guest + 1)}>+</CircleBorder>
                    </div>
                </div>
            </Title>
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
`;
const Title = styled.div`
    margin-top: 10%;
    width: 55%;
    height: 70%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    padding-bottom: 100px;
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
    width: 200px;
    height: 100px;
`;
