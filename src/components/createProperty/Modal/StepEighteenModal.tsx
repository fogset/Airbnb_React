import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
function StepEighteenModal({ setCamera, camera }) {
    const [titleWord, setTitleWord] = useState("");
    function handleChange(event) {
        setTitleWord(event?.target.value);
    }
    function handleClose() {
        setCamera(false);
    }
    return (
        <Container>
            <Background />
            <Modal>
                <IoCloseOutline className="absolute top-5 left-5" size={40} onClick={handleClose} />

                <div className="flex flex-col items-center w-[100%]">
                    <div className="absolute top-10 left-10 text-2xl font-medium mt-12">
                        Tell guests about your exterior security cameras
                    </div>
                    <div className="absolute top-32 left-10 text-lg text-gray-500">
                        Describe the area that each camera monitors, such as the backyard or pool.
                    </div>
                    <div className="absolute top-40 left-10 text-sm text-gray-500">Learn more</div>
                    <StyledTextarea value={titleWord} onChange={handleChange} />
                    <div className="absolute bottom-20 right-10 mt-3 text-lg">
                        {300 - titleWord.length} characters available
                    </div>
                    {titleWord.length > 300 && (
                        <div className="absolute bottom-20 left-10 mt-3 text-base text-[#ef3a5e]">
                            The maximum number of characters allowed is 300.
                        </div>
                    )}
                </div>
            </Modal>
        </Container>
    );
}

export default StepEighteenModal;
const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #3f3d3d;
    opacity: 0.5;
`;
const Modal = styled.div`
    position: relative;
    width: 50%;
    height: 450px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: black;
    background-color: white;
`;
const StyledTextarea = styled.textarea`
    width: 90%;
    height: 30%;
    border-width: 2px;
    border-color: #5c5757;
    border-radius: 15px;
    padding: 20px;
    font-size: 25px;
    position: absolute;
    top: 200px;
`;
