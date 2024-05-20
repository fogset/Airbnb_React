import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MdOutlineHouse, MdCabin, MdOutlineHouseboat, MdOutlineOtherHouses } from "react-icons/md";
import {
    PiBuildingApartment,
    PiBarn,
    PiBuildings,
    PiShippingContainerDuotone,
    PiFarm,
    PiLighthouseLight,
    PiWindmill,
} from "react-icons/pi";
import { TbCoffee, TbCamper } from "react-icons/tb";
import { LuSailboat } from "react-icons/lu";
import {
    GiCastle,
    GiCaveEntrance,
    GiGreenhouse,
    GiFamilyHouse,
    GiCampingTent,
    GiHeartTower,
    GiTreehouse,
    GiMushroomHouse,
} from "react-icons/gi";
import { FaLandmarkDome, FaHouseSignal, FaCaravan, FaHouseUser } from "react-icons/fa6";
import { AiFillAlert } from "react-icons/ai";
import { RiEarthquakeLine } from "react-icons/ri";
import { FaHotel } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { LiaWarehouseSolid } from "react-icons/lia";

function StepTwo() {
    return (
        <Container>
            <TitleAndFlex>
                <div className="text-4xl font-bold mt-6 mb-7">
                    Which of these best describes your place?
                </div>
                <FlexContainer>
                    <Border>
                        <MdOutlineHouse size={45} />
                        House
                    </Border>
                    <Border>
                        <PiBuildingApartment size={45} />
                        Apartment
                    </Border>
                    <Border>
                        <PiBarn size={45} />
                        Barn
                    </Border>
                    <Border>
                        <TbCoffee size={45} />
                        Bed & Breakfast
                    </Border>
                    <Border>
                        <LuSailboat size={45} />
                        Boat
                    </Border>
                    <Border>
                        <MdCabin size={45} />
                        Cabin
                    </Border>
                    <Border>
                        <TbCamper size={45} />
                        Camper/RV
                    </Border>
                    <Border>
                        <PiBuildings size={45} />
                        Casa particular
                    </Border>
                    <Border>
                        <GiCastle size={45} />
                        Castle
                    </Border>
                    <Border>
                        <GiCaveEntrance size={45} />
                        Cave
                    </Border>
                    <Border>
                        <PiShippingContainerDuotone size={45} />
                        Container
                    </Border>
                    <Border>
                        <AiFillAlert size={45} />
                        Cycladic home
                    </Border>
                    <Border>
                        <GiGreenhouse size={45} />
                        Dammuso
                    </Border>
                    <Border>
                        <FaLandmarkDome size={45} />
                        Dome
                    </Border>
                    <Border>
                        <RiEarthquakeLine size={45} />
                        Earth home
                    </Border>
                    <Border>
                        <PiFarm size={45} />
                        Farm
                    </Border>
                    <Border>
                        <GiFamilyHouse size={45} />
                        Guesthouse
                    </Border>
                    <Border>
                        <FaHotel size={45} />
                        Hotel
                    </Border>
                    <Border>
                        <MdOutlineHouseboat size={45} />
                        Houseboat
                    </Border>
                    <Border>
                        <FaHouseSignal size={45} />
                        Kezhan
                    </Border>
                    <Border>
                        <BiBuildingHouse size={45} />
                        Minsu
                    </Border>
                    <Border>
                        <PiLighthouseLight size={45} />
                        Riad
                    </Border>
                    <Border>
                        <LiaWarehouseSolid size={45} />
                        Ryokan
                    </Border>
                    <Border>
                        <FaCaravan size={45} />
                        Shepherd's hut
                    </Border>
                    <Border>
                        <GiCampingTent size={45} />
                        Tent
                    </Border>
                    <Border>
                        <MdOutlineOtherHouses size={45} />
                        Tiny home
                    </Border>
                    <Border>
                        <GiHeartTower size={45} />
                        Tower
                    </Border>
                    <Border>
                        <GiTreehouse size={45} />
                        Tree house
                    </Border>
                    <Border>
                        <GiMushroomHouse size={45} />
                        Trullo
                    </Border>
                    <Border>
                        <PiWindmill size={45} />
                        Windmill
                    </Border>
                    <Border>
                        <FaHouseUser size={45} />
                        Yurt
                    </Border>
                </FlexContainer>
            </TitleAndFlex>
        </Container>
    );
}

export default StepTwo;
const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const TitleAndFlex = styled.div`
    width: 60%;
    height: 72%;
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
`;
const Border = styled.div`
    border-radius: 10px;
    border-width: 1px;
    height: 120px;
    width: 200px;
    border-color: gray;
    font-size: larger;
    font-weight: 500;
    padding: 15px;
    width: 30%;
    &:hover {
        border-color: black;
        border-width: 3px;
    }
`;
