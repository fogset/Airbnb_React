import styled from "styled-components";
import PropertyImages from "../components/properties/PropertyDetail/PropertyImages";
import { FaStar } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { PiFlowerTulip } from "react-icons/pi";
import { AiOutlinePicture } from "react-icons/ai";
import { TbBeach } from "react-icons/tb";
import { IoWifiOutline } from "react-icons/io5";
import { TbToolsKitchen2 } from "react-icons/tb";
import PropertyDateCount from "../components/properties/PropertyDetail/PropertyDateCount";
import Review from "../components/properties/PropertyDetail/Review/Review";
import Location from "../components/properties/PropertyDetail/Location";

function PropertyDetail() {
    return (
        <Container>
            <div className="text-3xl font-bold mt-4 mb-6">Moinho das Feteiras | The Mill</div>
            <ImageContainer>
                <PropertyImages />
            </ImageContainer>
            <Description>
                <div className="text-3xl font-bold mt-5">Windmill in Ponta Delgada, Portugal</div>
                <div className="mt-1 text-lg">
                    2 guests &middot; 1 bedrooms &middot; 1 bed &middot; 1 bath
                </div>
                <div className="mt-1 text-lg flex flex-row font-bold mb-10">
                    <FaStar className="mt-1" />
                    <div className=" ml-2">4.93 &middot;</div>
                    <div className="underline ml-2">230 reviews</div>
                </div>
                <hr />
                <div className="my-4 flex gap-4">
                    <ProfileImg src="https://a0.muscache.com/im/pictures/miso/Hosting-5264493/original/10d2c21f-84c2-46c5-b20b-b51d1c2c971a.jpeg?im_w=720" />
                    <div className="flex flex-col">
                        <div className="font-bold text-xl mt-2">Hosted by Moinho</div>
                        <div className="text-xl mt-2 text-gray-500">
                            Superhost &middot; 9 years hosting
                        </div>
                    </div>
                </div>
                <hr />
                <div className="flex mt-6 text-xl gap-6">
                    <div className="flex items-center ">
                        <FaNetworkWired size={40} />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">Dedicated workspace</div>
                        <div className="mt-2 text-gray-500">
                            A room with wifi that’s well-suited for working.
                        </div>
                    </div>
                </div>
                <div className="flex mt-6 text-xl gap-6">
                    <div className="flex items-center ">
                        <IoIosCheckboxOutline size={40} />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">Self check-in</div>
                        <div className="mt-2 text-gray-500">Check yourself in with the keypad.</div>
                    </div>
                </div>
                <div className="flex mt-6 text-xl gap-6 mb-10">
                    <div className="flex items-center ">
                        <MdOutlineFreeCancellation size={40} />
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold">Free cancellation for 48 hours</div>
                        <div className="mt-2 text-gray-500">
                            Get a full refund if you change your mind.
                        </div>
                    </div>
                </div>
                <hr />
                <Translate>
                    <div className="text-xl">Some info is shown in its original language.</div>
                    <div className="underline text-xl"> Translate</div>
                </Translate>
                <DescriptionLong>
                    Built in the 19th century, with a 360 degrees view over the sea and surroundings
                    on the top floor. It features a Bedroom with a king size bed, a very
                    well-decorated living room with kitchenette, and a WC. Free WiFi, air
                    conditioning, Led TV and DVD player. Private parking inside the premises,
                    providing extra security.
                </DescriptionLong>
                <div className="flex mt-3 mb-16">
                    <div className="underline text-xl">Show more</div>
                    <div className="flex items-center mt-1 ml-2">
                        <FaChevronRight size={22} />
                    </div>
                </div>
                <hr />
                <div className="font-bold text-3xl mt-10">Where you'll sleep</div>
                <BedroomBox>
                    <div className="flex flex-col p-5">
                        <IoBedOutline size={32} />
                        <div className="font-bold text-lg mt-1">BedRoom</div>
                        <div className="text-lg mt-1">1 double bed</div>
                    </div>
                </BedroomBox>
                <hr />
                <div className="font-bold text-3xl mt-10">What this place offers</div>
                <div className="flex mt-6 gap-6">
                    <PiFlowerTulip size={40} />
                    <div className="flex text-xl mt-1">Garden view</div>
                </div>
                <div className="flex mt-6 gap-6">
                    <AiOutlinePicture size={40} />
                    <div className="flex text-xl mt-1">Mountain view</div>
                </div>
                <div className="flex mt-6 gap-6">
                    <TbBeach size={40} />
                    <div className="flex text-xl mt-1">Beach access – Beachfront</div>
                </div>
                <div className="flex mt-6 gap-6">
                    <TbToolsKitchen2 size={40} />
                    <div className="flex text-xl mt-1">Kitchen</div>
                </div>
                <div className="flex mt-6 gap-6">
                    <IoWifiOutline size={40} />
                    <div className="flex text-xl mt-1">Wifi</div>
                </div>
                <AmenityBox>Show all 59 amenities</AmenityBox>
                <hr />
                <div className="mt-12 mb-12">
                    <PropertyDateCount />
                </div>
            </Description>
            <div className="mt-10">
                <Review />
            </div>
            <div className="mt-10">
                <Location />
            </div>
        </Container>
    );
}

export default PropertyDetail;
const Container = styled.div`
    position: relative;
    top: 120px;
    left: 0px;
    /* display: grid;
    place-content: center; */
    padding-bottom: 100px;
    margin-left: 5%;
`;
const ImageContainer = styled.div`
    width: 95%;
`;
const ProfileImg = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`;
const Translate = styled.div`
    background-color: #f7f7f7;
    display: flex;
    margin-top: 30px;
    gap: 10px;
    height: 50px;
    align-items: center;
`;
const Description = styled.div`
    width: 1000px;
`;
const DescriptionLong = styled.div`
    width: 100%;
    font-size: 19px;
    margin-top: 30px;
`;
const BedroomBox = styled.div`
    width: 220px;
    height: 150px;
    border-width: 2px;
    border-radius: 25px;
    margin-bottom: 50px;
    margin-top: 20px;
`;
const AmenityBox = styled.div`
    width: 250px;
    height: 60px;
    border-width: 2px;
    border-radius: 10px;
    margin-bottom: 50px;
    margin-top: 50px;
    border-color: black;
    font-weight: 700;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
