import styled from "styled-components";
import { useState, useEffect } from "react";

function StepEleven() {
    const [titleWord, setTitleWord] = useState("fd");
    function handleChange(event) {
        setTitleWord(event?.target.value);
    }
    // useEffect(() => {
    //     console.log(titleWord);
    // }, [titleWord]);
    return (
        <>
            <Container>
                <Overflow>
                    <div className="flex flex-col">
                        <div className="text-4xl font-medium mt-4">
                            Now, let's give your house a title
                        </div>
                        <div className="text-xl mt-4 mb-9">
                            Short titles work best. Have fun with it—you can always change it later.
                        </div>
                    </div>
                    <StyledTextarea value={titleWord} onChange={handleChange} />
                    {/* <BottomPad /> */}
                    <div className="mt-3 text-lg">{titleWord.length}/32</div>
                    {titleWord.length > 32 && (
                        <div className="mt-3 text-base text-[#ef3a5e]">
                            The maximum number of characters allowed is 32.
                        </div>
                    )}
                </Overflow>
            </Container>
        </>
    );
}

export default StepEleven;
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
    border-width: 3px;
    border-color: #ec6c6c;
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
