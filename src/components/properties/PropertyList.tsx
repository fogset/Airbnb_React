import React from "react";
import PropertyListItem from "./PropertyListItem";
import styled from "styled-components";
function PropertyList() {
    return (
        <Container>
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
        </Container>
    );
}

export default PropertyList;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 90%;
    padding-bottom: 100px;
    position: absolute;
    gap: 10px;
`;
