import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import styled from "styled-components";
import PropertyDetail from "./pages/PropertyDetail";
import CreateProperty from "./pages/CreateProperty";
import { Route, Routes } from "react-router-dom";
import StepOne from "./components/createProperty/StepOne";
import StepTwo from "./components/createProperty/StepTwo";
import StepThree from "./components/createProperty/StepThree";
import StepFour from "./components/createProperty/StepFour";
import StepFive from "./components/createProperty/StepFive";
import StepSix from "./components/createProperty/StepSix";
import { useState, useEffect } from "react";
import StepBottomNav from "./components/createProperty/StepBottomNav";
import StepTopNav from "./components/createProperty/StepTopNav";
import { useLocation } from "react-router-dom";
function App() {
    const [currentUrl, setCurrentUrl] = useState("null");
    const location = useLocation();
    useEffect(() => {
        if (location.pathname.includes("become-a-host")) {
            setCurrentUrl("creatProperty");
        } else {
            setCurrentUrl("main");
        }
    }, [location]);

    return (
        <Container>
            {currentUrl === "main" && <Navbar />}
            {currentUrl === "creatProperty" && <StepTopNav />}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/property/:id" element={<PropertyDetail />} />
                <Route path="/become-a-host/:id" element={<CreateProperty />} />
                <Route path="/become-a-host/:id/about-your-place" element={<StepOne />} />
                <Route path="/become-a-host/:id/structure" element={<StepTwo />} />
                <Route path="/become-a-host/:id/privacy-type" element={<StepThree />} />
                <Route path="/become-a-host/:id/location" element={<StepFour />} />
                <Route path="/become-a-host/:id/floor-plan" element={<StepFive />} />
                <Route path="/become-a-host/:id/guests" element={<StepSix />} />
            </Routes>
            {currentUrl === "creatProperty" && <StepBottomNav />}
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: relative;
`;
