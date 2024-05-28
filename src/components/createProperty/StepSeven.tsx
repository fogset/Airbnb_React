import styled from "styled-components";
import { useState } from "react";

function StepSeven() {
    const [privateRoom, setPrivateRoom] = useState(0);
    const [dedicated, setDedicated] = useState(0);
    const [shared, setShared] = useState(0);
    return (
        <Container>
            <Overflow>
                <div className="text-5xl font-bold mb-2">
                    What kind of bathrooms are available to guests?
                </div>
                <div className="flex w-full justify-between mt-14 mb-10">
                    <div className="flex flex-col">
                        <div className="text-2xl">Private and attached</div>
                        <div className="text-1xl text-gray-500">
                            It’s connected to the guest’s room and is just for them.
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <CircleBorder onClick={() => setPrivateRoom(privateRoom - 1)}>
                            -
                        </CircleBorder>
                        {privateRoom}
                        <CircleBorder onClick={() => setPrivateRoom(privateRoom + 1)}>
                            +
                        </CircleBorder>
                    </div>
                </div>
                <hr />
                <div className="flex w-full justify-between mt-10 mb-10">
                    <div className="flex flex-col">
                        <div className="text-2xl">Dedicated</div>
                        <div className="text-1xl text-gray-500">
                            It’s private, but accessed via a shared space, like a hallway.
                        </div>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <CircleBorder onClick={() => setDedicated(dedicated - 1)}>-</CircleBorder>
                        {dedicated}
                        <CircleBorder onClick={() => setDedicated(dedicated + 1)}>+</CircleBorder>
                    </div>
                </div>
                <hr />
                <div className="flex w-full justify-between mt-10">
                    <div className="flex flex-col">
                        <div className="text-2xl">Shared</div>
                        <div className="text-1xl text-gray-500">It’s shared with other people.</div>
                    </div>
                    <div className="flex items-center gap-3 text-xl">
                        <CircleBorder onClick={() => setShared(shared - 1)}>-</CircleBorder>
                        {shared}
                        <CircleBorder onClick={() => setShared(shared + 1)}>+</CircleBorder>
                    </div>
                </div>
                <div className="pb-44" />
            </Overflow>
        </Container>
    );
}

export default StepSeven;
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

const Overflow = styled.div`
    margin-top: 7%;
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
