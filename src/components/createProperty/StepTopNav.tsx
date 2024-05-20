import React from "react";
import { SiAirbnb } from "react-icons/si";
import styled from "styled-components";
import { Link } from "react-router-dom";
function StepTopNav() {
    return (
        <Container>
            <Link to="/" className="ml-10">
                <SiAirbnb size={40} />
            </Link>
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
    left: 0px;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom-color: gray;
    border-bottom-width: thin;
    z-index: 101;
    background-color: white;
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
