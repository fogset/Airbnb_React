import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function StepBottomNav() {
    const [curPageNum, setCurPageNum] = useState(0);
    const navigate = useNavigate();
    const PageUrlName = new Map();
    PageUrlName.set(1, "about-your-place");
    PageUrlName.set(2, "structure");
    PageUrlName.set(3, "privacy-type");
    PageUrlName.set(4, "location");
    PageUrlName.set(5, "floor-plan");
    PageUrlName.set(6, "guests");
    PageUrlName.set(7, "bathrooms");
    PageUrlName.set(8, "stand-out");
    PageUrlName.set(9, "amenities");
    PageUrlName.set(10, "photos");
    PageUrlName.set(11, "title");
    PageUrlName.set(12, "description");
    PageUrlName.set(13, "finish-setup");
    PageUrlName.set(14, "instant-book");
    function HandleBack() {
        setCurPageNum(curPageNum - 1);
    }
    function handleNext() {
        setCurPageNum(curPageNum + 1);
    }
    useEffect(() => {
        navigate(`/become-a-host/123/${PageUrlName.get(curPageNum)}`);
    }, [curPageNum]);
    return (
        <Container>
            <HorizontalLine />
            <ButtonContainer>
                <BackButton onClick={HandleBack}>Back</BackButton>
                {curPageNum}
                <Button onClick={handleNext}>Next</Button>
            </ButtonContainer>
        </Container>
    );
}

export default StepBottomNav;
const Container = styled.div`
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 12%;
    background-color: white;
    z-index: 10;
`;
const ButtonContainer = styled.div`
    height: 100%;
    margin-left: 3%;
    margin-right: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const BackButton = styled.div`
    background-color: white;
    height: 50px;
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-size: larger;
    border-radius: 10px;
    text-decoration: underline;
    &:hover {
        background-color: gray;
    }
`;
const Button = styled.div`
    background-color: #222222;
    height: 55px;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    border-radius: 10px;
    font-size: larger;
    &:hover {
        background-color: black;
    }
`;

const HorizontalLine = styled.div`
    background-color: #dddddd;
    width: 100%;
    height: 7px;
`;
