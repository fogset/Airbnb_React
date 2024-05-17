import React from "react";
import styled from "styled-components";
import StepTopNav from "../components/createProperty/StepTopNav";
import StepOne from "../components/createProperty/StepOne";
import StepBottomNav from "../components/createProperty/StepBottomNav";
function CreateProperty() {
    return (
        <>
            <Background>
                <StepTopNav />
                <StepOne />
                <StepBottomNav />
            </Background>
        </>
    );
}

export default CreateProperty;
const Background = styled.div`
    left: 0px;
    top: 0px;
    position: fixed;
    z-index: 100;
    background-color: white;
    height: 100%;
    width: 100%;
`;
