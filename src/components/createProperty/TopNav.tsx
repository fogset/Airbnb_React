import React from "react";
import { SiAirbnb } from "react-icons/si";
import styled from "styled-components";
function TopNav() {
    return (
        <Container>
            <div className="ml-10">
                <SiAirbnb size={40} />
            </div>
            <Button>Exit</Button>
        </Container>
    );
}

export default TopNav;
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
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    border-radius: 50px;
    font-size: larger;
    position: absolute;
    right: 50px;
    bottom: 20%;
    border-width: 1px;
`;
