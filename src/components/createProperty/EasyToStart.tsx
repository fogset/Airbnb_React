import React from "react";
import styled from "styled-components";
function EasyToStart() {
    return (
        <Container>
            <Title>It’s easy to get started on Airbnb</Title>
            <div>
                <div className="flex mb-6">
                    <div>
                        <div className="text-3xl font-medium">1 Tell us about your place</div>
                        <Text>
                            Share some basic info, like where it is and how many guests can stay.
                        </Text>
                    </div>
                    <Image src="https://a0.muscache.com/4ea/air/v2/pictures/da2e1a40-a92b-449e-8575-d8208cc5d409.jpg" />
                </div>
                <hr />
                <div className="flex mt-6 mb-6">
                    <div>
                        <div className="text-3xl font-medium">2 Make it stand out</div>
                        <Text>
                            Add 5 or more photos plus a title and description—we’ll help you out.
                        </Text>
                    </div>
                    <Image src="https://a0.muscache.com/4ea/air/v2/pictures/bfc0bc89-58cb-4525-a26e-7b23b750ee00.jpg" />
                </div>
                <hr />
                <div className="flex mt-9 pb-40">
                    <div>
                        <div className="text-3xl font-medium">3 Finish up and publish</div>
                        <Text>
                            Choose if you'd like to start with an experienced guest, set a starting
                            price, and publish your listing.
                        </Text>
                    </div>
                    <Image src="https://a0.muscache.com/4ea/air/v2/pictures/c0634c73-9109-4710-8968-3e927df1191c.jpg" />
                </div>
            </div>
        </Container>
    );
}

export default EasyToStart;

const Title = styled.div`
    font-size: 71px;
    font-weight: bold;
    width: 40%;
    margin-top: 15%;
    margin-left: 5%;
    margin-right: 5%;
`;
const Container = styled.div`
    display: flex;
    position: relative;
    top: 18%;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 90%;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Image = styled.img`
    width: 49%;
    height: 200px;
`;
const Text = styled.div`
    font-size: 22px;
    width: 400px;
    margin-top: 20px;
    color: #6a6a6f;
`;
