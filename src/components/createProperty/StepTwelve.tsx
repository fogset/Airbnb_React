import styled from "styled-components";
import { useState, useEffect } from "react";

function StepTwelve() {
    const [titleWord, setTitleWord] = useState("fd");
    function handleChange(event) {
        setTitleWord(event?.target.value);
    }
    return (
        <>
            <Container>
                <Overflow>
                    <div className="flex flex-col">
                        <div className="text-4xl font-medium mt-4">Create your description</div>
                        <div className="text-xl mt-3 mb-9 text-[#8e9991]">
                            Share what makes your place special.
                        </div>
                    </div>
                    <StyledTextarea value={titleWord} onChange={handleChange} />
                    <div className="mt-3 text-lg">{titleWord.length}/500</div>
                    {titleWord.length > 500 && (
                        <div className="mt-3 text-base text-[#ef3a5e]">
                            The maximum number of characters allowed is 500.
                        </div>
                    )}
                </Overflow>
            </Container>
        </>
    );
}

export default StepTwelve;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const StyledTextarea = styled.textarea`
    width: 90%;
    height: 40%;
    border-width: 2px;
    border-color: #5c5757;
    border-radius: 15px;
    padding: 20px;
    font-size: 25px;
`;
const Overflow = styled.div`
    width: 50%;
    height: 70%;
    display: flex;
    flex-direction: column;
`;
const BottomPad = styled.div`
    height: 150px;
`;
