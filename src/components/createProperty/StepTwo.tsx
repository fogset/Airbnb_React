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
    const [selectedCategory, setSelectredCategory] = useState(null);
    useEffect(() => {
        console.log(selectedCategory);
    }, [selectedCategory]);
    return (
        <Container>
            <TitleAndFlex>
                <div className="text-4xl font-bold mt-6 mb-7">
                    Which of these best describes your place?
                </div>
                <FlexContainer>
                    {selectedCategory === "House" ? (
                        <SelectedBorder>
                            <MdOutlineHouse size={45} />
                            House
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("House")}>
                            <MdOutlineHouse size={45} />
                            House
                        </Border>
                    )}

                    {selectedCategory === "Apartment" ? (
                        <SelectedBorder>
                            <PiBuildingApartment size={45} />
                            Apartment
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Apartment")}>
                            <PiBuildingApartment size={45} />
                            Apartment
                        </Border>
                    )}

                    {selectedCategory === "Barn" ? (
                        <SelectedBorder>
                            <PiBarn size={45} />
                            Barn
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Barn")}>
                            <PiBarn size={45} />
                            Barn
                        </Border>
                    )}

                    {selectedCategory === "Bed & Breakfast" ? (
                        <SelectedBorder>
                            <TbCoffee size={45} />
                            Bed & Breakfast
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Bed & Breakfast")}>
                            <TbCoffee size={45} />
                            Bed & Breakfast
                        </Border>
                    )}

                    {selectedCategory === "Boat" ? (
                        <SelectedBorder>
                            <LuSailboat size={45} />
                            Boat
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Boat")}>
                            <LuSailboat size={45} />
                            Boat
                        </Border>
                    )}

                    {selectedCategory === "Cabin" ? (
                        <SelectedBorder>
                            <MdCabin size={45} />
                            Cabin
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Cabin")}>
                            <MdCabin size={45} />
                            Cabin
                        </Border>
                    )}

                    {selectedCategory === "Camper/RV" ? (
                        <SelectedBorder>
                            <TbCamper size={45} />
                            Camper/RV
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Camper/RV")}>
                            <TbCamper size={45} />
                            Camper/RV
                        </Border>
                    )}

                    {selectedCategory === "Casa particular" ? (
                        <SelectedBorder>
                            <PiBuildings size={45} />
                            Casa particular
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Casa particular")}>
                            <PiBuildings size={45} />
                            Casa particular
                        </Border>
                    )}

                    {selectedCategory === "Castle" ? (
                        <SelectedBorder>
                            <GiCastle size={45} />
                            Castle
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Castle")}>
                            <GiCastle size={45} />
                            Castle
                        </Border>
                    )}

                    {selectedCategory === "Cave" ? (
                        <SelectedBorder>
                            <GiCaveEntrance size={45} />
                            Cave
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Cave")}>
                            <GiCaveEntrance size={45} />
                            Cave
                        </Border>
                    )}

                    {selectedCategory === "Container" ? (
                        <SelectedBorder>
                            <PiShippingContainerDuotone size={45} />
                            Container
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Container")}>
                            <PiShippingContainerDuotone size={45} />
                            Container
                        </Border>
                    )}

                    {selectedCategory === "Cycladic home" ? (
                        <SelectedBorder>
                            <AiFillAlert size={45} />
                            Cycladic home
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Cycladic home")}>
                            <AiFillAlert size={45} />
                            Cycladic home
                        </Border>
                    )}
                    {selectedCategory === "Dammuso" ? (
                        <SelectedBorder>
                            <GiGreenhouse size={45} />
                            Dammuso
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Dammuso")}>
                            <GiGreenhouse size={45} />
                            Dammuso
                        </Border>
                    )}
                    {selectedCategory === "Dome" ? (
                        <SelectedBorder>
                            <FaLandmarkDome size={45} />
                            Dome
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Dome")}>
                            <FaLandmarkDome size={45} />
                            Dome
                        </Border>
                    )}
                    {selectedCategory === "Earth home" ? (
                        <SelectedBorder>
                            <RiEarthquakeLine size={45} />
                            Earth home
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Earth home")}>
                            <RiEarthquakeLine size={45} />
                            Earth home
                        </Border>
                    )}

                    {selectedCategory === "Farm" ? (
                        <SelectedBorder>
                            <PiFarm size={45} />
                            Farm
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Farm")}>
                            <PiFarm size={45} />
                            Farm
                        </Border>
                    )}

                    {selectedCategory === "Guesthouse" ? (
                        <SelectedBorder>
                            <GiFamilyHouse size={45} />
                            Guesthouse
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Guesthouse")}>
                            <GiFamilyHouse size={45} />
                            Guesthouse
                        </Border>
                    )}

                    {selectedCategory === "Hotel" ? (
                        <SelectedBorder>
                            <FaHotel size={45} />
                            Hotel
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Hotel")}>
                            <FaHotel size={45} />
                            Hotel
                        </Border>
                    )}
                    {selectedCategory === "Houseboat" ? (
                        <SelectedBorder>
                            <MdOutlineHouseboat size={45} />
                            Houseboat
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Houseboat")}>
                            <MdOutlineHouseboat size={45} />
                            Houseboat
                        </Border>
                    )}
                    {selectedCategory === "Kezhan" ? (
                        <SelectedBorder>
                            <FaHouseSignal size={45} />
                            Kezhan
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Kezhan")}>
                            <FaHouseSignal size={45} />
                            Kezhan
                        </Border>
                    )}
                    {selectedCategory === "Minsu" ? (
                        <SelectedBorder>
                            <BiBuildingHouse size={45} />
                            Minsu
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Minsu")}>
                            <BiBuildingHouse size={45} />
                            Minsu
                        </Border>
                    )}
                    {selectedCategory === "Riad" ? (
                        <SelectedBorder>
                            <PiLighthouseLight size={45} />
                            Riad
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Riad")}>
                            <PiLighthouseLight size={45} />
                            Riad
                        </Border>
                    )}
                    {selectedCategory === "Ryokan" ? (
                        <SelectedBorder>
                            <LiaWarehouseSolid size={45} />
                            Ryokan
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Ryokan")}>
                            <LiaWarehouseSolid size={45} />
                            Ryokan
                        </Border>
                    )}
                    {selectedCategory === "Shepherd's hut" ? (
                        <SelectedBorder>
                            <FaCaravan size={45} />
                            Shepherd's hut
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Shepherd's hut")}>
                            <FaCaravan size={45} />
                            Shepherd's hut
                        </Border>
                    )}
                    {selectedCategory === "Tent" ? (
                        <SelectedBorder>
                            <GiCampingTent size={45} />
                            Tent
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Tent")}>
                            <GiCampingTent size={45} />
                            Tent
                        </Border>
                    )}
                    {selectedCategory === "Tiny home" ? (
                        <SelectedBorder>
                            <MdOutlineOtherHouses size={45} />
                            Tiny home
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Tiny home")}>
                            <MdOutlineOtherHouses size={45} />
                            Tiny home
                        </Border>
                    )}
                    {selectedCategory === "Tower" ? (
                        <SelectedBorder>
                            <GiHeartTower size={45} />
                            Tiny home
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Tower")}>
                            <GiHeartTower size={45} />
                            Tiny home
                        </Border>
                    )}
                    {selectedCategory === "Tree house" ? (
                        <SelectedBorder>
                            <GiTreehouse size={45} />
                            Tree house
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Tree house")}>
                            <GiTreehouse size={45} />
                            Tree house
                        </Border>
                    )}
                    {selectedCategory === "Trullo" ? (
                        <SelectedBorder>
                            <GiMushroomHouse size={45} />
                            Trullo
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Trullo")}>
                            <GiMushroomHouse size={45} />
                            Trullo
                        </Border>
                    )}
                    {selectedCategory === "Windmill" ? (
                        <SelectedBorder>
                            <PiWindmill size={45} />
                            Windmill
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Windmill")}>
                            <PiWindmill size={45} />
                            Windmill
                        </Border>
                    )}
                    {selectedCategory === "Yurt" ? (
                        <SelectedBorder>
                            <FaHouseUser size={45} />
                            Yurt
                        </SelectedBorder>
                    ) : (
                        <Border onClick={() => setSelectredCategory("Yurt")}>
                            <FaHouseUser size={45} />
                            Yurt
                        </Border>
                    )}
                </FlexContainer>
                <div className="pb-44" />
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
    overflow-x: hidden;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;
const TitleAndFlex = styled.div`
    width: 60%;
    height: 72%;
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
const SelectedBorder = styled.div`
    border-radius: 10px;
    height: 120px;
    width: 200px;
    font-size: larger;
    font-weight: 500;
    padding: 15px;
    width: 30%;
    border-color: black;
    border-width: 3px;
`;
