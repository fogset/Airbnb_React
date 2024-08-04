import styled from "styled-components";
import { IoCloseOutline } from "react-icons/io5";

function StepEighteenModal() {
    return (
        <Container>
            <Background />
            <Modal>
                {/* <IoCloseOutline
                    className="absolute top-5 left-5"
                    size={40}
                    onClick={() => setCamera(false)}
                /> */}

                <div className="flex flex-col items-center w-[100%]">
                    <div className="text-xl font-medium mt-12">
                        Tell guests about your exterior security camerasfdf
                    </div>
                    <div className="text-sm text-gray-500">
                        Describe the area that each camera monitors, such as the backyard or pool.
                    </div>
                    <div className="text-sm text-gray-500">Learn more</div>
                </div>
            </Modal>
        </Container>
    );
}
{
    /* <Image src={logo} />; */
}
export default StepEighteenModal;
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
