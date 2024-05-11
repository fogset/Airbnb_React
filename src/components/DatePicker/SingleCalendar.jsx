import styled from "styled-components";
import { monthNames } from "./constant";
import moment from "moment";
import React, { useState, useEffect } from "react";
import DateCurrent from "./DateCurrent";

function SingleCalendar({ month, year }) {
    const [curMonthArray, setCurMonthArray] = useState([]);
    let firstDayOfMonth;
    function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
    }
    function DateToStrMDY(month, day, year) {
        var monthS = month.toString();
        var dayS = day.toString();
        var yearS = year.toString();
        var resultDate = monthS + "/" + dayS + "/" + yearS;
        return resultDate;
    }
    function GetMomentsThisMonths(month, year) {
        firstDayOfMonth = moment(DateToStrMDY(month, 1, year), "MM-DD-YYYY").days();
        var TempArray = [];
        var currentMonthDays = daysInMonth(month, year);
        var day = 1;
        for (let i = 0; i < firstDayOfMonth; i++) {
            let calendarDay = {
                date: moment(DateToStrMDY(1, 7, 1000), "MM-DD-YYYY"),
                selected: false,
            };
            TempArray.push(calendarDay);
        }
        while (day <= currentMonthDays) {
            const curDate = moment(DateToStrMDY(month, day, year), "MM-DD-YYYY");
            let calendarDay = {
                date: curDate,
                selected: false,
            };
            TempArray.push(calendarDay);
            day++;
        }
        setCurMonthArray(TempArray);
    }
    useEffect(() => {
        GetMomentsThisMonths(month, year);
    }, [month, year]);
    return (
        <CalendarContainer>
            <Title>
                <div>{monthNames[month - 1]}</div>
                <div>{year}</div>
            </Title>
            <div className="flex flex-row gap-[25px] ml-2 mb-4">
                <DayTitle>Su</DayTitle>
                <DayTitle>Mo</DayTitle>
                <DayTitle>Tu</DayTitle>
                <DayTitle>We</DayTitle>
                <DayTitle>Th</DayTitle>
                <DayTitle>Fr</DayTitle>
                <DayTitle>Sa</DayTitle>
            </div>
            {curMonthArray.length > 0 && (
                <SevenColGrid>
                    {curMonthArray.map((currentDay, index) => (
                        <DateCurrent
                            index={index}
                            currentDay={currentDay}
                            setCurMonthArray={setCurMonthArray}
                            curMonthArray={curMonthArray}
                        />
                    ))}
                </SevenColGrid>
            )}
        </CalendarContainer>
    );
}

export default SingleCalendar;

const SevenColGrid = styled.div`
    /* margin-left: 200px; */
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
`;
const Title = styled.div`
    display: flex;
    font-weight: 500;
    justify-content: center;
    gap: 5px;
    margin-bottom: 10px;
    font-size: large;
`;
const DayTitle = styled.div`
    color: gray;
`;
const CalendarContainer = styled.div`
    width: 300px;
    /* background-color: lightblue; */
`;
