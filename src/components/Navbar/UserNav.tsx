import { IoMdMenu } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { useState } from "react";
import LoginOrSignUpModal from "../Modal/LoginOrSignUpModal";
function UserNav() {
    const [isOpen, setIsOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    function handleOpen() {
        setIsOpen(!isOpen);
    }
    function LoginCLick() {
        setOpenLogin(true);
    }
    return (
        <div className="p-2 relative inline-block border rounded-full">
            <button className="flex items-center px-0.5 gap-2" onClick={handleOpen}>
                <IoMdMenu size={25} />
                <FaUserCircle size={35} />
            </button>
            {isOpen && (
                <UserNavContainer>
                    <Button onClick={LoginCLick}>Sign up</Button>
                    <Button onClick={LoginCLick}>Login in</Button>
                    <hr />
                    <Button>Gift Cards</Button>
                    <Button>Airbnb your home</Button>
                    <Button>Help Centre</Button>
                </UserNavContainer>
            )}
            {openLogin && <LoginOrSignUpModal setOpenLogin={setOpenLogin} />}
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
