import styled from "styled-components";
import StepEighteenModal from "./Modal/StepEighteenModal";
import { useState, useEffect } from "react";
function Stepeighteen() {
    const [camera, setCamera] = useState(false);
    const [monitor, setmonitor] = useState(false);
    const [weapon, setWeapon] = useState(false);
    const handlePromotion = () => {
        setCamera(true);
    };
    const handlemonitor = () => {
        setmonitor(!monitor);
    };
    const handleweapon = () => {
        setWeapon(!weapon);
    };

    return (
        <Container>
            <ScrollContainer>
                <div className="mb-2">
                    <div className="text-4xl font-bold mb-2">Just one last step!</div>
                    <div className="flex flex-row">
                        <div className="mt-4 text-2xl font-bold">
                            Does your place have any of these?
                        </div>
                    </div>
                </div>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <div className="ml-7 text-2xl mb-1">Exterior security cameras</div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput
                                type="checkbox"
                                checked={camera}
                                onChange={handlePromotion}
                            />
                            {camera == true && (
                                <StepEighteenModal setCamera={setCamera} camera={camera} />
                            )}
                        </div>
                    </div>
                </Border>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <div className="ml-7 text-2xl mb-1">Noise decibel monitors</div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput
                                type="checkbox"
                                checked={monitor}
                                onChange={handlemonitor}
                            />
                        </div>
                    </div>
                </Border>
                <Border>
                    <div className="flex flex-row w-full relative">
                        <div className="ml-7 text-2xl mb-1">Weapons</div>
                        <div className="flex items-center absolute right-0 h-full">
                            <StyleInput type="checkbox" checked={weapon} onChange={handleweapon} />
                        </div>
                    </div>
                </Border>
                <div className="mt-12 ml-7 font-medium text-2xl mb-1">Important things to know</div>
                <div className="ml-7 text-xl mb-1">
                    Security cameras that monitor indoor spaces are not allowed even if they're
                    turned off. All exterior security cameras must be disclosed.
                </div>
                <div className="ml-7 text-xl mb-1">
                    Be sure to comply with your local laws and review Airbnb's anti-discrimination
                    policy and guest and Host fees.
                </div>
                <div className="mb-12" />
                <HorizontalLine />
            </ScrollContainer>
        </Container>
    );
}

export default Stepeighteen;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    z-index: 10;
`;
const ScrollContainer = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    width: 1000px;
    height: 600px;
    padding-top: 7%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Border = styled.div`
    height: 200px;
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px;
`;
const HorizontalLine = styled.div`
    background-color: black;
    height: 10px;
    width: 200px;
`;
const StyleInput = styled.input`
    width: 30px;
    height: 30px;
`;
