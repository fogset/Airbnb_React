import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import moment from "moment";
import React, { useState, useEffect } from "react";
import SingleCalendar from "./SingleCalendar";
function DateRangePicker() {
    //const [currentMonth, setCurrentMonth] = useState(moment().calendar());
    var currentMonth = moment();

    // const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [calMonth1, setCalMonth1] = useState(new Date().getMonth());
    const [calYear1, setCalYear1] = useState(new Date().getFullYear());
    const [calMonth2, setCalMonth2] = useState(new Date().getMonth() + 1);
    const [calYear2, setCalYear2] = useState(new Date().getFullYear());
    function previousMonth() {
        setCalMonth1(calMonth1 - 1);
        setCalMonth2(calMonth2 - 1);
    }
    function nextMonth() {
        setCalMonth1(calMonth1 + 1);
        setCalMonth2(calMonth2 + 1);
    }
    function previousYear(setMonth, setYear, year) {
        setYear(year - 1);
        setMonth(12);
    }
    function nextYear(setMonth, setYear, year) {
        setYear(year + 1);
        setMonth(1);
    }
    useEffect(() => {
        if (calMonth1 === 0) {
            previousYear(setCalMonth1, setCalYear1, calYear1);
        }
        if (calMonth2 === 0) {
            previousYear(setCalMonth2, setCalYear2, calYear2);
        }
        if (calMonth1 === 12) {
            nextYear(setCalMonth1, setCalYear1, calYear1);
        }
        if (calMonth2 === 12) {
            nextYear(setCalMonth2, setCalYear2, calYear2);
        }
    }, [currentMonth]);
    useEffect(() => {
        console.log("currentMonth:" + currentMonth.add(1, "month").format("l"));
        console.log("currentMonth:" + currentMonth.add(2, "month").format("l"));
        console.log("currentMonth:" + currentMonth.add(2, "month").format("l"));
        //console.log("b:" + b.format());
        // console.log(moment().format());
        // console.log("Current month is:", moment().month());

        //alert(moment());
    }, [calMonth1, calMonth2]);

    return (
        <PickerWrapper>
            calendar 1 -------{calMonth1}--{calYear1}/////// calendar 2 -------{calMonth2}--
            {calYear2}
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
