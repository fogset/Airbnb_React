import styled from "styled-components";
import { useState } from "react";
function StepFive() {
    const [locked, setLocked] = useState(false);
    const [NoLock, setNoLock] = useState(false);
    const [bedroom, setBedroom] = useState(1);
    const [bed, setBed] = useState(1);
    const handleLock = () => {
        setLocked(true);
        setNoLock(false);
    };
    const handleNoLock = () => {
        setNoLock(true);
        setLocked(false);
    };
    return (
        <Container>
            <Title>
                <div className="text-4xl font-bold">Let's start with the basics</div>
                <div className="flex flex-col gap-4 mt-12">
                    <div className="flex w-full justify-between">
                        <div className="text-2xl">Bedrooms</div>
                        <div className="flex items-center gap-3 text-xl">
                            <CircleBorder onClick={() => setBedroom(bedroom - 1)}>-</CircleBorder>
                            {bedroom}
                            <CircleBorder onClick={() => setBedroom(bedroom + 1)}>+</CircleBorder>
                        </div>
                    </div>
                    <hr />
                    <div className="flex w-full justify-between">
                        <div className="text-2xl">Beds</div>
                        <div className="flex items-center gap-3 text-xl">
                            <CircleBorder onClick={() => setBed(bed - 1)}>-</CircleBorder>
                            {bed}
                            <CircleBorder onClick={() => setBed(bed + 1)}>+</CircleBorder>
                        </div>
                    </div>
                </div>
                <div className="text-2xl font-bold mt-12">Does every bedroom have a lock?</div>
                <div className="flex gap-5 mt-4">
                    <StyleInput type="checkbox" checked={locked} onChange={handleLock} />
                    <div className="text-xl">Yes</div>
                </div>
                <div className="flex gap-5 mt-4">
                    <StyleInput type="checkbox" checked={NoLock} onChange={handleNoLock} />
                    <div className="text-xl">No</div>
                </div>
                <div className="pb-44" />
            </Title>
        </Container>
    );
}

export default StepFive;
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
const Title = styled.div`
    margin-top: 10%;
    width: 65%;
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
    font-size: 32px;
    padding-bottom: 5px;
`;
const StyleInput = styled.input`
    width: 30px;
    height: 30px;
`;
