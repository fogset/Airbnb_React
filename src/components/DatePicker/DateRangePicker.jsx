import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { monthNames, yearName, dayName } from "./constant";
import moment from "moment";
import React, { useState, useEffect } from "react";
import DateCurrent from "./DateCurrent";
function DateRangePicker() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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
        console.log("moments:" + moment().format("DD-MM-YYYY"));
        const randomDate = moment(DateToStrMDY(5, 10, 2024), "MM-DD-YYYY");
        console.log("randomDate month:" + randomDate.month());
        console.log("randomDate year:" + randomDate.year());
        console.log("randomDate" + randomDate);
        // var admission = moment("{date1}", "DD-MM-YYYY");
        // var discharge = moment("{date2}", "DD-MM-YYYY");
        // discharge.diff(admission, "days");

        GetMomentsThisMonths(3, 2024);
        console.table("table");
        console.table(curMonthArray);
    }, []);

    return (
        <PickerWrapper>
            <Header>
                <FaChevronLeft />
                <CalendarContainer>
                    <Title>
                        <div>{monthNames[currentMonth]}</div>
                        <div>{currentYear}</div>
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
    /* margin-left: 200px; */
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 3px;
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
const CalendarContainer = styled.div`
    width: 300px;
    /* background-color: lightblue; */
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
