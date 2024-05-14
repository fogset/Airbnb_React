import React from "react";
import ReviewTitle from "./ReviewTitle";
import Comments from "./Comments";
import styled from "styled-components";
function Review() {
    return (
        <div>
            <hr />
            <div className="mt-16 mb-12">
                <ReviewTitle />
            </div>
            <hr />
            <CommentContainer>
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
                <Comments />
            </CommentContainer>
            <ReviewBoxButton>Show all 233 reviews</ReviewBoxButton>
            <hr />
        </div>
    );
}

export default Review;
const CommentContainer = styled.div`
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`;
const CommentContainerSingle = styled.div`
    background-color: lightblue;
`;
const ReviewBoxButton = styled.div`
    width: 250px;
    height: 60px;
    border-width: 2px;
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 50px;
    border-color: black;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
