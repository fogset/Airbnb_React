import React from "react";
import styled from "styled-components";
import EasyToStart from "../components/createProperty/EasyToStart";
import BottomNav from "../components/createProperty/BottomNav";
import TopNav from "../components/createProperty/TopNav";
function CreateProperty() {
    return (
        <>
            <Background>
                <TopNav />
                <EasyToStart />
                <BottomNav />
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
