import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { monthNames } from "./constant";
import moment from "moment";
import React, { useState, useEffect } from "react";
import DateCurrent from "./DateCurrent";
import SingleCalendar from "./SingleCalendar";
function DateRangePicker() {
    // const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    function previousMonth() {
        setCurrentMonth(currentMonth - 1);
    }
    function nextMonth() {
        setCurrentMonth(currentMonth + 1);
    }
    useEffect(() => {
        console.table("table");
    }, []);

    return (
        <PickerWrapper>
            <LeftIcon onClick={previousMonth}>
                <FaChevronLeft />
            </LeftIcon>
            <DoubleCalendarContainer>
                <SingleCalendar month={currentMonth} year={currentYear} />
                <SingleCalendar month={currentMonth + 1} year={currentYear} />
            </DoubleCalendarContainer>
            <RightIcon onClick={nextMonth}>
                <FaChevronRight />
            </RightIcon>
        </PickerWrapper>
    );
}

export default DateRangePicker;

const PickerWrapper = styled.div`
    margin-left: 100px;
    position: relative;
    margin-top: 100px;
    width: fit-content;
    height: 100%;

    //background-color: lightblue;
`;
const DoubleCalendarContainer = styled.div`
    display: flex;
    gap: 20px;
`;
const LeftIcon = styled.div`
    position: absolute;
    left: 10px;
    top: 7px;
`;
const RightIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 7px;
`;
// {
//     curMonthArray.length > 0 && (
//         <SevenColGrid>
//             {curMonthArray.map((currentDay) => (
//                 <div>{currentDay.selected === false ? <div>false</div> : <div>true</div>}</div>
//             ))}
//         </SevenColGrid>
//     );
// }
// var admission = moment("{date1}", "DD-MM-YYYY");
// var discharge = moment("{date2}", "DD-MM-YYYY");
// discharge.diff(admission, "days");
