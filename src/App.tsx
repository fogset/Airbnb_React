import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import styled from "styled-components";
import PropertyDetail from "./pages/PropertyDetail";

function App() {
    return (
        <Container>
            <Navbar />
            <PropertyDetail />
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: relative;
`;
