import React from "react";
import styled from "styled-components";
import { IoWifiOutline } from "react-icons/io5";
import { PiTelevisionSimple, PiOven } from "react-icons/pi";
import { BiSolidWasher } from "react-icons/bi";
import {
    FaCarAlt,
    FaRegSnowflake,
    FaSwimmingPool,
    FaHotTub,
    FaFire,
    FaUmbrellaBeach,
    FaSkiing,
} from "react-icons/fa";
import { LuParkingCircle } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import {
    GiLightningDissipation,
    GiPoolTableCorner,
    GiFireplace,
    GiGrandPiano,
} from "react-icons/gi";
import { TbGrill, TbBrandCarbon } from "react-icons/tb";
import { MdBrunchDining } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { FaHouseFloodWater, FaShower, FaFireExtinguisher } from "react-icons/fa6";
import { CiAlarmOn } from "react-icons/ci";
import { RiFirstAidKitLine } from "react-icons/ri";
function StepNine() {
    return (
        <Container>
            <Overflow>
                <div className="text-3xl font-bold mt-6 mb-1">
                    Tell guests what your place has to offer
                </div>
                <div className="text-xl mb-7 text-gray-500">
                    You can add more amenities after you publish your listing.
                </div>
                <FlexContainer>
                    <Border>
                        <IoWifiOutline size={40} />
                        Wifi
                    </Border>
                    <Border>
                        <PiTelevisionSimple size={40} />
                        TV
                    </Border>
                    <Border>
                        <PiOven size={40} />
                        Kitchen
                    </Border>
                    <Border>
                        <BiSolidWasher size={40} />
                        Washer
                    </Border>
                    <Border>
                        <FaCarAlt size={40} />
                        Free parking on premises
                    </Border>
                    <Border>
                        <LuParkingCircle size={40} />
                        Paid parking on premises
                    </Border>
                    <Border>
                        <FaRegSnowflake size={40} />
                        Air conditioning
                    </Border>
                    <Border>
                        <BsPersonWorkspace size={40} />
                        Dedicated workspace
                    </Border>
                </FlexContainer>
                <div className="text-xl mt-7 mb-7 font-medium">
                    Do you have any standout amenities?
                </div>
                <FlexContainer>
                    <Border>
                        <FaSwimmingPool size={40} />
                        Pool
                    </Border>
                    <Border>
                        <FaHotTub size={40} />
                        Hot tub
                    </Border>
                    <Border>
                        <GiLightningDissipation size={40} />
                        Patio
                    </Border>
                    <Border>
                        <TbGrill size={40} />
                        BBQ grill
                    </Border>
                    <Border>
                        <MdBrunchDining size={40} />
                        Outdoor dining area
                    </Border>
                    <Border>
                        <FaFire size={40} />
                        Fire pit
                    </Border>
                    <Border>
                        <GiPoolTableCorner size={40} />
                        Pool table
                    </Border>
                    <Border>
                        <GiFireplace size={40} />
                        indoor firplace
                    </Border>
                    <Border>
                        <GiGrandPiano size={40} />
                        Piano
                    </Border>
                    <Border>
                        <CgGym size={40} />
                        Exercise equipment
                    </Border>
                    <Border>
                        <FaHouseFloodWater size={40} />
                        Lake access
                    </Border>
                    <Border>
                        <FaUmbrellaBeach size={40} />
                        Beach access
                    </Border>
                    <Border>
                        <FaSkiing size={40} />
                        Ski-in/Ski-out
                    </Border>
                    <Border>
                        <FaShower size={40} />
                        Outdoor shower
                    </Border>
                </FlexContainer>
                <div className="text-xl mt-7 mb-7 font-medium">
                    Do you have any of these safety items?
                </div>
                <FlexContainer>
                    <Border>
                        <CiAlarmOn size={40} />
                        Smoke alarm
                    </Border>
                    <Border>
                        <RiFirstAidKitLine size={40} />
                        First aid kit
                    </Border>
                    <Border>
                        <FaFireExtinguisher size={40} />
                        Fire extinguisher
                    </Border>
                    <Border>
                        <TbBrandCarbon size={40} />
                        Carbon monoxide alarm
                    </Border>
                </FlexContainer>
                <div className="pb-44" />
            </Overflow>
        </Container>
    );
}

export default StepNine;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const Overflow = styled.div`
    margin-top: 7%;
    width: 55%;
    height: 70%;
`;
const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;
const Border = styled.div`
    border-radius: 10px;
    border-width: 1px;
    height: 120px;
    width: 200px;
    border-color: gray;
    font-size: 16px;
    font-weight: 500;
    padding: 20px;
    width: 30%;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
`;
