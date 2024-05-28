import styled from "styled-components";
import logo from "./uploadPhoto.png";

function StepTen() {
    return (
        <Container>
            <Overflow>
                <div className="flex flex-col">
                    <div className="text-4xl font-medium mt-4">
                        Add some photos of your apartment
                    </div>
                    <div className="text-xl mt-4 mb-12">
                        You'll need 5 photos to get started. You can add more or make changes later.
                    </div>
                </div>
                <Border>
                    <Image src={logo} />
                    <Button>Add photos</Button>
                </Border>
                <BottomPad />
            </Overflow>
        </Container>
    );
}
{
    /* <Image src={logo} />; */
}
export default StepTen;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Image = styled.img`
    width: 150px;
    height: 100px;
    margin-left: 10px;
`;
const Border = styled.div`
    position: relative;
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    border-radius: 20px;
    border-width: 1px;
    border-color: black;
`;
const Overflow = styled.div`
    width: 50%;
    height: 70%;
`;
const BottomPad = styled.div`
    height: 200px;
`;
const Button = styled.button`
    position: absolute;
    bottom: 15%;
    border-radius: 10px;
    border-width: 1px;
    height: 50px;
    width: 150px;
    border-color: gray;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    &:hover {
        border-width: 2px;
        background-color: #f7f7f7;
        border-color: black;
    }
`;
