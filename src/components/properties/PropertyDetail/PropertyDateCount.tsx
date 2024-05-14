import styled from "styled-components";
import DateRangePicker from "./../../DatePicker/DateRangePicker";

function PropertyDateCount() {
    return (
        <Container>
            <div className="font-bold text-2xl">2 nights in Ponta Delgada</div>
            <div className="mt-2 text-lg text-gray-500">Jan 2,2025 - Jan 4,2025</div>
            <div className="mt-4">
                <DateRangePicker />
            </div>
            <ClearDate>Clear dates</ClearDate>
        </Container>
    );
}

export default PropertyDateCount;
const Container = styled.div`
    position: relative;
    width: fit-content;

    padding-bottom: 50px;
`;
const ClearDate = styled.div`
    position: absolute;
    right: 5px;
    bottom: 10px;
    text-decoration: underline;
`;
