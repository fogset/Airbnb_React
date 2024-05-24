import styled from "styled-components";
import logo from "./TellUsPlace.png";
function StepEight() {
    return (
        <Container>
            <div className="flex flex-col w-1/3">
                <div className="text-xl font-medium">Step 2</div>
                <div className="text-5xl font-medium mt-4">Make your place stand out</div>
                <div className="text-xl mt-4">
                    In this step, you’ll add some of the amenities your place offers, plus 5 or more
                    photos. Then, you’ll create a title and description.
                </div>
            </div>
            <Image src={logo} />
        </Container>
    );
}

export default StepEight;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-left: 10%;
    gap: 5%;
`;
const Image = styled.img`
    width: 300px;
    height: 300px;
    margin-left: 10px;
`;
