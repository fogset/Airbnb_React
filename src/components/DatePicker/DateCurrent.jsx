import styled from "styled-components";
function DateCurrent({ currentDay, setCurMonthArray, curMonthArray, index }) {
    function SelectDateClick() {
        let calendarDay = {
            date: currentDay.date,
            selected: true,
        };
        //alert(currentDay.date.date());
        console.log("currentDay----------------" + currentDay.date.date());
        updateElementAtIndex(index, calendarDay);
        console.log(currentDay.date.date());
    }
    const updateElementAtIndex = (index, newElement) => {
        const newArray = [...curMonthArray];
        newArray[index] = newElement;
        console.table("table");
        console.table(newArray);
        console.log("updateElementAtIndex----------------" + newArray[index].toString());
        //alert(newElement.date.toString());
        setCurMonthArray(newArray);
    };
    return (
        <SelectDate onClick={SelectDateClick}>
            {currentDay.date.year() !== 1000 && currentDay.date.date()}
        </SelectDate>
    );
}

export default DateCurrent;
const SelectDate = styled.div`
    padding: 2px;
    &:hover {
        color: white;
        background-color: blue;
    }
`;
