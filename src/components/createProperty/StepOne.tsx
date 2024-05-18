import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import logo from "./TellUsPlace.png";
function StepOne() {
    return (
        <Container>
            <div className="flex flex-col w-1/2">
                <div className="text-xl font-medium">Step 1</div>
                <div className="text-6xl font-medium mt-4">Tell us about your place</div>
                <div className="text-2xl mt-4">
                    In this step, we'll ask you which type of property you have and if guests will
                    book the entire place or just a room. Then let us know the location and how many
                    guests can stay.
                </div>
            </div>
            <Image src={logo} />
        </Container>
    );
}
//https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high
export default StepOne;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 10%;
`;
const Image = styled.img`
    width: 360px;
    height: 360px;
    margin-left: 10px;
`;
{
    /* <ReactPlayer
    url="https://www.youtube.com/watch?v=FIwDtXypiSY&ab_channel=VictorQuintana"
    width="600px"
    height="400px"
    autoplay={true}
/>; */
}
