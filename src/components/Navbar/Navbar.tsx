import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AirbnbLogo from "./../../assets/airbnbLogo.png";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddPropertyButton";

function Navbar() {
    return (
        <Container>
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <img src={AirbnbLogo} width={110} height={38} />
                    </Link>
                    <div className="flex space-x-6">
                        <SearchFilters />
                    </div>
                    <div className="flex items-center space-x-6 relative">
                        <AddPropertyButton />
                        <UserNav />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Navbar;
const Container = styled.div`
    width: 100%;
    position: fixed;
    top: 0px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    background-color: white;
    z-index: 10;
`;
