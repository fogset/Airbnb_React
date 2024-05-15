import { useNavigate } from "react-router-dom";
import PropertyListItem from "./PropertyListItem";
import styled from "styled-components";
function PropertyList() {
    const navigate = useNavigate();
    function GoPropertyDetail() {
        navigate(`/property/123`);
    }
    return (
        <Container onClick={GoPropertyDetail}>
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
            <PropertyListItem />
        </Container>
    );
}

export default PropertyList;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 90%;
    padding-bottom: 100px;
    position: absolute;
    gap: 10px;
`;
