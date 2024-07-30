import styled from "styled-components";
import logo from "./Images/StepThree.png";
function StepThirteen() {
    return (
        <Container>
            <div className="flex flex-col w-1/2 ">
                <div className="text-xl font-medium">Step 3</div>
                <div className="text-5xl font-medium mt-4">Finish up and publish</div>
                <div className="text-xl mt-6">
                    Finally, you'll choose booking settings, set up pricing, and publish your
                    listing.
                </div>
            </div>
            <Image src={logo} />
        </Container>
    );
}

export default StepThirteen;
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
    width: 350px;
    height: 350px;
    margin-left: 10px;
`;
