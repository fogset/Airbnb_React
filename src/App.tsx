import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import styled from "styled-components";
import PropertyDetail from "./pages/PropertyDetail";
import CreateProperty from "./pages/CreateProperty";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <Container>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/become-a-host/:id" element={<CreateProperty />} />
            </Routes>
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: relative;
`;
