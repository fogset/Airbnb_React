import styled from "styled-components";
import PropertyImages from "../components/properties/PropertyDetail/PropertyImages";
import { FaStar } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";
import { IoIosCheckboxOutline } from "react-icons/io";
import { MdOutlineFreeCancellation } from "react-icons/md";

function PropertyDetail() {
    return (
        <Container>
            <div className="text-3xl font-bold mt-4 mb-6">Moinho das Feteiras | The Mill</div>
            <ImageContainer>
                <PropertyImages />
            </ImageContainer>
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
            <div className="flex mt-6 text-xl gap-6">
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
        </Container>
    );
}

export default PropertyDetail;
const Container = styled.div`
    position: relative;
    top: 120px;
    display: grid;
    place-content: center;
    padding-bottom: 100px;
`;
const ImageContainer = styled.div`
    width: 1300px;
`;
const ProfileImg = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
`;
