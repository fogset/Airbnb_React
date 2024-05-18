import styled from "styled-components";
import StepTopNav from "../components/createProperty/StepTopNav";
import StepOne from "../components/createProperty/StepOne";
import StepBottomNav from "../components/createProperty/StepBottomNav";
import StepTwo from "../components/createProperty/StepTwo";

function CreateProperty() {
    return (
        <>
            <Background>
                <StepOne />
            </Background>
        </>
    );
}

export default CreateProperty;
const Background = styled.div`
    left: 0px;
    top: 0px;
    position: fixed;
    background-color: white;
    height: 100%;
    width: 100%;
`;
