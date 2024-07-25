import styled from "styled-components";
import { useState } from "react";

function StepEleven() {
    const [uploadPhoto, setUploadPhoto] = useState("sjkfsf");
    function handleChange(event) {
        setUploadPhoto(event?.target.value);
    }
    return (
        <>
            <Container>
                <Overflow>
                    <div className="flex flex-col">
                        <div className="text-4xl font-medium mt-4">
                            Now, let's give your house a title
                        </div>
                        <div className="text-xl mt-4 mb-12">
                            Short titles work best. Have fun with it—you can always change it later.
                        </div>
                    </div>
                    <input type="textarea" name="textValue" />
                    <StyledTextarea value={uploadPhoto} onChange={handleChange} />;
                    <BottomPad />
                </Overflow>
            </Container>
        </>
    );
}

export default StepEleven;
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
const StyledTextarea = styled.textarea`
    width: 100%;
`;
const Overflow = styled.div`
    width: 50%;
    height: 70%;
`;
const BottomPad = styled.div`
    height: 150px;
`;
