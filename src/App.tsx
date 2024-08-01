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
import StepSeven from "./components/createProperty/StepSeven";
import StepEight from "./components/createProperty/StepEight";
import StepNine from "./components/createProperty/StepNine";
import StepTen from "./components/createProperty/StepTen";
import StepEleven from "./components/createProperty/StepEleven";
import StepTwelve from "./components/createProperty/StepTwelve";
import StepThirteen from "./components/createProperty/StepThirteen";
import StepFourteen from "./components/createProperty/StepFourteen";
import StepFifteen from "./components/createProperty/StepFifteen";
import StepSixteen from "./components/createProperty/StepSixteen";
import StepSeventeen from "./components/createProperty/StepSeventeen";
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
                <Route path="/become-a-host/:id/bathrooms" element={<StepSeven />} />
                <Route path="/become-a-host/:id/stand-out" element={<StepEight />} />
                <Route path="/become-a-host/:id/amenities" element={<StepNine />} />
                <Route path="/become-a-host/:id/photos" element={<StepTen />} />
                <Route path="/become-a-host/:id/title" element={<StepEleven />} />
                <Route path="/become-a-host/:id/description" element={<StepTwelve />} />
                <Route path="/become-a-host/:id/finish-setup" element={<StepThirteen />} />
                <Route path="/become-a-host/:id/instant-book" element={<StepFourteen />} />
                <Route path="/become-a-host/:id/visibility" element={<StepFifteen />} />
                <Route path="/become-a-host/:id/price" element={<StepSixteen />} />
                <Route path="/become-a-host/:id/discount" element={<StepSeventeen />} />
            </Routes>
            {currentUrl === "creatProperty" && <StepBottomNav />}
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: relative;
`;
