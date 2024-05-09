import React from "react";
import styled from "styled-components";
import { IoSearchSharp } from "react-icons/io5";
function SearchFilters() {
    return (
        <Container>
            <div className="hidden lg:block">
                <div className="flex flex-row items-center justify-between">
                    <Date>
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Search destinations</p>
                    </Date>
                    <Date>
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm">Add dates</p>
                    </Date>
                    <Date>
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Add dates</p>
                    </Date>
                    <Date>
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add guests</p>
                    </Date>
                </div>
            </div>
            <div className="p-2 cursor-pointer">
                <CircleRed>
                    <div className="absolute top-2.5 left-2.5">
                        <IoSearchSharp size={20} />
                    </div>
                </CircleRed>
            </div>
        </Container>
    );
}

export default SearchFilters;
const Container = styled.div`
    height: 64px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-width: 1px;
    border-radius: 9999px;
`;
const Date = styled.div`
    cursor: pointer;
    height: 64px;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 9999px;
    &:hover {
        background-color: rgb(243 244 246);
    }
`;
const CircleRed = styled.div`
    position: relative;
    height: 40px;
    width: 40px;
    background-color: #ff385c;
    border-radius: 50%;
    color: white;
    &:hover {
        background-color: #c7021c;
    }
`;
