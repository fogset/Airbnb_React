import React from "react";
import styled from "styled-components";
function StartPageBottomNav() {
    return (
        <Container>
            <HorizontalLine />
            <Button>Get started</Button>
        </Container>
    );
}

export default StartPageBottomNav;
const Container = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 100px;
    background-color: white;
`;
const Button = styled.div`
    background-color: #e61e50;
    height: 55px;
    width: 170px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 10px;
    font-size: larger;
    position: absolute;
    right: 50px;
    bottom: 20%;
`;

const HorizontalLine = styled.div`
    background-color: #dddddd;
    width: 100%;
    height: 10px;
`;
