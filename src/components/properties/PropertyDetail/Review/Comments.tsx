import styled from "styled-components";
import { FaStar } from "react-icons/fa";
function Comments() {
    return (
        <div className="w-1/2 mt-14">
            <div className="flex">
                <ProfileImg src="https://a0.muscache.com/im/pictures/user/714da978-de9c-493e-91d9-1431dc6f0fcd.jpg?im_w=240" />
                <div className="mt-1 ml-3 text-lg">
                    <div className="font-bold">Harry</div>
                    <div>York, United Kingdom</div>
                </div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="flex items-center">
                    <FaStar size={15} />
                    <FaStar size={15} />
                    <FaStar size={15} />
                    <FaStar size={15} />
                    <FaStar size={15} />
                </div>
                <div className="font-bold">· 1 day ago</div>
                <div className="text-[#6A6A6A]">· Stayed a few nights</div>
            </div>
            <div className="text-lg mt-2">Fabulous stay, would recommend to all</div>
        </div>
    );
}

export default Comments;
const ProfileImg = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;
