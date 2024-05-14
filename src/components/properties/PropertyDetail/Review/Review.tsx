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
            <div className="flex">
                <Comments />
                <Comments />
            </div>
        </div>
    );
}

export default Review;
const CommentContainer = styled.img`
    /* margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: lightblue; */
`;
