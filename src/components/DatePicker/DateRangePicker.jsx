import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { monthNames, yearName, dayName } from "./constant";

import React, { useState, useEffect } from "react";
function DateRangePicker() {
    const numDays = (y, m) => new Date(y, m, 0).getDate();
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [daysArray, setDayArray] = useState([]);
    const [currentDays, setCurrentDays] = useState([]);
    var testArray = [];
    let firstDayOfMonth = new Date(currentYear, currentMonth - 1, 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();

    function DaysCurrentMonth() {
        for (var i = 1; i <= numDays(currentYear, currentMonth); i++) {
            testArray.push(i);
        }
        setDayArray(testArray);
    }
    function GetCalendarDay() {
        for (let day = 0; day < 42; day++) {
            if (currentDays.length > 34) {
                break;
            }
            if (day === 0 && weekdayOfFirstDay === 0) {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
            } else if (day === 0) {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
            } else {
                firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
            }
            let calendarDay = {
                currentMonth: currentMonth,
                date: new Date(firstDayOfMonth),
                month: firstDayOfMonth.getMonth(),
                number: firstDayOfMonth.getDate(),
                selected: 2,
                year: firstDayOfMonth.getFullYear(),
            };
            currentDays.push(calendarDay);
        }
        setDayArray(testArray);
    }
    useEffect(() => {
        console.log("firstDayOfMonth:" + firstDayOfMonth);
        console.log("weekdayOfFirstDay:" + weekdayOfFirstDay);
        GetCalendarDay();
        DaysCurrentMonth();
        console.table("table");
        console.table(currentDays);
    }, []);

    return (
        <PickerWrapper>
            <Header>
                <FaChevronLeft />
                <div>
                    <Title>
                        <div>{monthNames[currentMonth]}</div>
                        <div>{currentYear}</div>
                    </Title>
                    <div className="flex flex-row gap-5">
                        <DayTitle>Su</DayTitle>
                        <DayTitle>Mo</DayTitle>
                        <DayTitle>Tu</DayTitle>
                        <DayTitle>We</DayTitle>
                        <DayTitle>Th</DayTitle>
                        <DayTitle>Fr</DayTitle>
                        <DayTitle>Sa</DayTitle>
                    </div>
                    {currentDays.length > 0 && (
                        <SevenColGrid>
                            {currentDays.map((item) => (
                                <div className="mr-[22px]">{item.number}</div>
                            ))}
                        </SevenColGrid>
                    )}
                </div>
                <FaChevronRight />
            </Header>
        </PickerWrapper>
    );
}

export default DateRangePicker;

const PickerWrapper = styled.div`
    border-radius: 7px;
    width: 500px;
`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    p {
        flex: 1 0 0;
    }
    ion-icon {
        cursor: pointer;
    }
`;
const SevenColGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
`;
const Title = styled.div`
    display: flex;
    font-weight: bold;
    justify-content: center;
    gap: 5px;
`;
const DayTitle = styled.div`
    color: gray;
`;
