import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
function UserNav() {
    const [isOpen, setIsOpen] = useState(false);
    function handleOpen() {
        setIsOpen(!isOpen);
    }
    return (
        <div className="p-2 relative inline-block border rounded-full" onClick={handleOpen}>
            <button className="flex items-center px-0.5 gap-2">
                <IoMdMenu size={25} />
                <FaUserCircle size={35} />
            </button>
            {isOpen && (
                <UserNavContainer>
                    <Button>Sign up</Button>
                    <Button>Login in</Button>
                    <hr />
                    <Button>Gift Cards</Button>
                    <Button>Airbnb your home</Button>
                    <Button>Help Centre</Button>
                </UserNavContainer>
            )}
        </div>
    );
}

export default UserNav;
const UserNavContainer = styled.div`
    position: absolute;
    top: 62px;
    right: 5px;
    width: 240px;
    background-color: white;
    z-index: 100;
    height: 250px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const Button = styled.div`
    height: 20%;
    padding-left: 10%;
    display: flex;
    align-items: center;
    &:hover {
        opacity: 1;
        background-color: #f7f7f7;
    }
`;
