import styled from "styled-components";

import { IoCloseOutline, IoAddOutline } from "react-icons/io5";
import Logo from "../Images/DragAndDrop.png";

function UploadPhoto({ setUploadPhoto, uploadPhoto }) {
    return (
        <Container>
            <Background />
            <Modal>
                <IoCloseOutline className="absolute top-5 left-5" size={40} />
                <IoAddOutline className="absolute top-5 right-5" size={40} />
                <div className="flex flex-col items-center w-[100%]">
                    <div
                        className="text-xl font-medium mt-4"
                        onClick={() => setUploadPhoto(!uploadPhoto)}
                    >
                        Upload photos
                    </div>
                    <div className="text-sm text-gray-500">No items selected</div>
                    <Border>
                        <Image src={Logo} />
                        <div className="text-xl font-medium">Drag and drop</div>
                        <div className="text-base">or browse for photos</div>
                        <Button>Browse</Button>
                    </Border>
                    <HorizontalLine />
                    <div className="flex justify-between items-center w-[100%] h-[100px] px-4">
                        <div className="text-xl font-medium">Done</div>
                        <Button>Upload</Button>
                    </div>
                </div>
            </Modal>
        </Container>
    );
}
{
    /* <Image src={logo} />; */
}
export default UploadPhoto;
const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
const Background = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #3f3d3d;
    opacity: 0.5;
`;
const Image = styled.img`
    width: 100px;
    height: 100px;
    margin-left: 10px;
`;
const Modal = styled.div`
    position: relative;
    width: 50%;
    height: 600px;
    display: flex;
    justify-content: center;
    border-radius: 20px;
    border-width: 1px;
    border-color: black;
    background-color: white;
`;

const Button = styled.button`
    margin-top: 10px;
    border-radius: 10px;
    height: 50px;
    width: 130px;
    font-size: 19px;
    font-weight: 500;
    background-color: #222222;
    color: white;
    &:hover {
        border-width: 2px;
        background-color: #f7f7f7;
        border-color: black;
        color: black;
    }
`;
const Border = styled.div`
    position: relative;
    width: 90%;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    border-width: 3px;
    border-color: #6b6a6a;
    border-style: dashed;
    margin-top: 70px;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 15px;
`;
const HorizontalLine = styled.div`
    background-color: #dddddd;
    width: 100%;
    height: 2px;
`;
