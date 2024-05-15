import styled from "styled-components";
import { useState } from "react";
import one from "../assets/Categories/1.jpg";
import two from "../assets/Categories/2.jpg";
import three from "../assets/Categories/3.jpg";
import four from "../assets/Categories/4.jpg";
import five from "../assets/Categories/5.jpg";
import six from "../assets/Categories/6.jpg";
import seven from "../assets/Categories/7.jpg";
import eight from "../assets/Categories/8.jpg";
import nine from "../assets/Categories/9.jpg";
import ten from "../assets/Categories/10.jpg";
import eleven from "../assets/Categories/11.jpg";
import twelve from "../assets/Categories/12.jpg";
import thirten from "../assets/Categories/13.jpg";
import fourten from "../assets/Categories/14.jpg";

function Categories() {
    const [category, setCategory] = useState("");

    return (
        <Container>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={one} width={25} height={25} />
                <span className="text-xs">Icons</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={two} width={25} height={25} />
                <span className="text-xs">OMG!</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={three} width={25} height={25} />
                <span className="text-xs">Tiny homes</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={four} width={25} height={25} />
                <span className="text-xs">Countryside</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={five} width={25} height={25} />
                <span className="text-xs">Windmills</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={six} width={25} height={25} />
                <span className="text-xs">Off the grid</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={seven} width={25} height={25} />
                <span className="text-xs">Cabins</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={eight} width={25} height={25} />
                <span className="text-xs">Lakefront</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={nine} width={25} height={25} />
                <span className="text-xs">Amazing views</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={ten} width={25} height={25} />
                <span className="text-xs">Amazing pools</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={eleven} width={25} height={25} />
                <span className="text-xs">Mansions</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={twelve} width={25} height={25} />
                <span className="text-xs">Domes</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={thirten} width={25} height={25} />
                <span className="text-xs">Tropical</span>
            </SelectCategory>
            <SelectCategory onClick={() => setCategory("Icons")}>
                <img src={fourten} width={25} height={25} />
                <span className="text-xs">Tree houses</span>
            </SelectCategory>
        </Container>
    );
}

export default Categories;

const Container = styled.div`
    position: fixed;
    top: 95px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: white;
    cursor: pointer;
    z-index: 100;
    height: 70px;
    width: 100%;
    padding-top: 20px;
    justify-content: center;
    z-index: 9;
`;
const SelectCategory = styled.div`
    margin-right: 25px;
    padding-bottom: 10px;
    cursor: pointer;
    opacity: 0.6;
    border-bottom-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    &:hover {
        opacity: 1;
        border-bottom-width: 2px;
    }
`;
