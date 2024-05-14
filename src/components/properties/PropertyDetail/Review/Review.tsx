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
            </CommentContainer>
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
