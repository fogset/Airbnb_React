import React from "react";
import styled from "styled-components";
function PropertyImages() {
    return (
        <div className="flex gap-1 ">
            <LeftImgContainer>
                <LeftImage src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
            </LeftImgContainer>
            <RightImgContainer>
                <RightImage src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
                <RightImage src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
                <RightImage src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
                <RightImage src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
            </RightImgContainer>
        </div>
    );
}

export default PropertyImages;
const LeftImgContainer = styled.div`
    width: 1000px;
`;
const RightImgContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
    width: 1000px;
`;
const LeftImage = styled.img`
    width: 100%;
    height: 100%;
`;
const RightImage = styled.img`
    width: 49%;
    height: 220px;
`;
