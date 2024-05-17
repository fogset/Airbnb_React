import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function AddPropertyButton() {
    return <Container>Airbnb your home</Container>;
}

export default AddPropertyButton;
const Container = styled.div`
    padding: 8px;
    position: relative;
    border-radius: 50px;
    cursor: pointer;
    &:hover {
        background-color: #f7f7f7;
    }
`;
