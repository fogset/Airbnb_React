import React from "react";
import { SiAirbnb } from "react-icons/si";
import styled from "styled-components";
function StepTopNav() {
    return (
        <Container>
            <div className="ml-10">
                <SiAirbnb size={40} />
            </div>
            <div className="flex mr-8 gap-4">
                <Button>Questions?</Button>
                <Button>Save&exit</Button>
            </div>
        </Container>
    );
}

export default StepTopNav;
const Container = styled.div`
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: gray;
    border-bottom-width: thin;
`;
const Button = styled.div`
    background-color: white;
    height: 45px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 50px;
    font-size: 18px;
    border-width: 1px;
`;
