import Categories from "../components/Categories";
import PropertyList from "../components/properties/PropertyList";
import styled from "styled-components";
function Main() {
    return (
        <Container>
            <Categories />
            <PropertyList />
        </Container>
    );
}

export default Main;
const Container = styled.div`
    position: absolute;
    top: 180px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
`;
