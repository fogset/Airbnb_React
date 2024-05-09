import React from "react";
import styled from "styled-components";
function PropertyListItem() {
    return (
        <div className="cursor-pointer flex flex-col text-base">
            <Image src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
            <div className="font-bold">Property name</div>
            <div className="text-sm text-gray-500">6584 km away</div>
            <div className="text-sm text-gray-500">Dec.9-14</div>
            <div className="mt-1 font-bold">$200 CAD night</div>
        </div>
    );
}

export default PropertyListItem;
const Image = styled.img`
    width: 250px;
    height: 250px;
`;
