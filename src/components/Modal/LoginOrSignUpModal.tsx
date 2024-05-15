import React from "react";
import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";
function LoginOrSignUpModal({ setOpenLogin }) {
    function CloseCLick() {
        setOpenLogin(false);
    }
    return (
        <>
            <Background />
            <Box>
                <LoginOrSignUp>
                    <div className="h-1/6 relative top-0 left-0 w-full flex justify-center items-center">
                        <div className="absolute top-4 left-4" onClick={CloseCLick}>
                            <IoCloseOutline size={35} />
                        </div>
                        <div className="text-xl font-medium">Log in or sign up</div>
                    </div>
                    <HorizontalLine />
                    <div className="ml-6">
                        <div className="mt-9 text-2xl font-medium">Welcome to Airbnb</div>
                        <PhoneBorder>
                            <div className="text-xl font-medium h-1/2">Canada(+1)</div>
                            <div className="text-xl text-[#8C8C8C] h-1/2">Phone number</div>
                        </PhoneBorder>
                        <div className="text-sm mt-1 mb-6">
                            We’ll call or text you to confirm your number. Standard message and data
                            rates apply. Privacy Policy
                        </div>
                        <Continue>Continue</Continue>
                    </div>
                </LoginOrSignUp>
            </Box>
        </>
    );
}

export default LoginOrSignUpModal;
const Background = styled.div`
    opacity: 0.5;
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 100;
    background-color: black;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const LoginOrSignUp = styled.div`
    position: relative;
    height: 80%;
    width: 45%;
    background-color: white;
    border-radius: 15px;
    opacity: 1;
    z-index: 101;
`;
const Box = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
`;
const HorizontalLine = styled.div`
    height: 1px;
    width: 100%;
    background-color: #dddddd;
`;
const PhoneBorder = styled.div`
    margin-top: 30px;
    height: 150px;
    width: 90%;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;
    border-color: red;
`;
const Continue = styled.button`
    background-color: #dc0f63;
    height: 50px;
    width: 90%;
    font-size: larger;
    color: white;
`;
