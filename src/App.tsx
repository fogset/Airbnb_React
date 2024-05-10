import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
import styled from "styled-components";
import PropertyDetail from "./pages/PropertyDetail";
import DateRangePicker from "./components/DatePicker/DateRangePicker";

function App() {
    return (
        <Container>
            {/* <Navbar /> */}
            {/* <PropertyDetail /> */}
            <DateRangePicker />
        </Container>
    );
}

export default App;
const Container = styled.div`
    position: relative;
`;
