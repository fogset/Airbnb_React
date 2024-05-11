import styled from "styled-components";
function DateCurrent({ currentDay, setCurMonthArray, curMonthArray, index }) {
    function SelectDateClick() {
        let calendarDay = {
            date: currentDay.date,
            selected: true,
        };
        updateArrayAtIndex(index, calendarDay);
    }
    const updateArrayAtIndex = (index, newElement) => {
        const newArray = [...curMonthArray];
        newArray[index] = newElement;
        setCurMonthArray(newArray);
    };
    return (
        <Container onClick={SelectDateClick}>
            {currentDay.selected === true && currentDay.date.year() !== 1000 && (
                <SelectDate>{currentDay.date.date()}</SelectDate>
            )}
            {currentDay.selected === false && currentDay.date.year() !== 1000 && (
                <NotSelectDate>{currentDay.date.date()}</NotSelectDate>
            )}
        </Container>
    );
}

export default DateCurrent;
const Container = styled.div`
    font-size: 13px;
    position: relative;
    font-weight: 500;
`;
const SelectDate = styled.div`
    border-radius: 50px;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #222222;
`;
const NotSelectDate = styled.div`
    border-radius: 50px;
    color: black;
    background-color: white;
    height: 35px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:hover {
        border-color: #222222;
        border-width: 2px;
    }
    //text-decoration: line-through;
`;
