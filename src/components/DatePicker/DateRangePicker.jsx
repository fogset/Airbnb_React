import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { minRange, maxRange } from "./constant";
import React, { useState, useEffect } from "react";
import SingleCalendar from "./SingleCalendar";
function DateRangePicker() {
    const [calMonth1, setCalMonth1] = useState(new Date().getMonth());
    const [calYear1, setCalYear1] = useState(new Date().getFullYear());
    const [calMonth2, setCalMonth2] = useState(new Date().getMonth() + 1);
    const [calYear2, setCalYear2] = useState(new Date().getFullYear());

    function previousMonth() {
        minRange(calMonth1, setCalMonth1, calYear1, setCalYear1);
        minRange(calMonth2, setCalMonth2, calYear2, setCalYear2);
    }
    function nextMonth() {
        maxRange(calMonth1, setCalMonth1, calYear1, setCalYear1);
        maxRange(calMonth2, setCalMonth2, calYear2, setCalYear2);
    }

    return (
        <PickerWrapper>
            <LeftIcon onClick={previousMonth}>
                <FaChevronLeft />
            </LeftIcon>
            <DoubleCalendarContainer>
                <SingleCalendar month={calMonth1} year={calYear1} />
                <SingleCalendar month={calMonth2} year={calYear2} />
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
    left: 2px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    &:hover {
        background-color: grey;
    }
`;
const RightIcon = styled.div`
    position: absolute;
    right: 2px;
    top: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    &:hover {
        background-color: grey;
    }
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
