import React from "react";
import styled from "styled-components";
import GoogleAddressSearch from "../GoogleAddressSearch";
function StepFour() {
    return (
        <Container>
            <Title>
                <div className="text-5xl font-bold">Is the pin in the right spot?</div>
                <div className="text-2xl text-[#6A6A6A]">
                    Your address is only shared with guests after they’ve made a reservation.
                </div>
                <GoogleAddressSearch />
            </Title>
        </Container>
    );
}

export default StepFour;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;
const Title = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10%;
`;
