import { useState } from 'react';
import React, { Fragment, FC } from 'react';

import './Calender.css'

// import useCalendar, { Column } from '../hooks/useCalendar';

interface Column {
    classes: string;
    date: string;
    value: number;
}

interface CalendarRows {
    [id: number]: Column[]
}

const daysShortArr = [
    'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'
];

const monthNamesArr = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
];

const useCalendar = (daysShort = daysShortArr, monthNames = monthNamesArr) => {
    const today = new Date();
    const todayFormatted = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;
    const daysInWeek = [1, 2, 3, 4, 5, 6, 0];
    const [selectedDate, setSelectedDate] = useState(today);
    const selectedMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0);
    const daysInMonth = selectedMonthLastDate.getDate();
    const firstDayInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
    const startingPoint = daysInWeek.indexOf(firstDayInMonth) + 1;
    let prevMonthStartingPoint = prevMonthLastDate.getDate() - daysInWeek.indexOf(firstDayInMonth) + 1;
    let currentMonthCounter = 1;
    let nextMonthCounter = 1;
    const rows = 6;
    const cols = 7;
    const calendarRows: CalendarRows = {};

    for (let i = 1; i < rows + 1; i++) {
        for (let j = 1; j < cols + 1; j++) {
            if (!calendarRows[i]) {
                calendarRows[i] = [];
            }

            if (i === 1) {
                if (j < startingPoint) {
                    calendarRows[i] = [...calendarRows[i], {
                        classes: 'in-prev-month',
                        date: `${prevMonthStartingPoint}-${selectedDate.getMonth() === 0 ? 12 : selectedDate.getMonth()}-${selectedDate.getMonth() === 0 ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear()}`,
                        value: prevMonthStartingPoint
                    }];
                    prevMonthStartingPoint++;
                } else {
                    calendarRows[i] = [...calendarRows[i], {
                        classes: '',
                        date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
                        value: currentMonthCounter
                    }];
                    currentMonthCounter++;
                }
            } else if (i > 1 && currentMonthCounter < daysInMonth + 1) {
                calendarRows[i] = [...calendarRows[i], {
                    classes: '',
                    date: `${currentMonthCounter}-${selectedDate.getMonth() + 1}-${selectedDate.getFullYear()}`,
                    value: currentMonthCounter
                }];
                currentMonthCounter++;
            } else {
                calendarRows[i] = [...calendarRows[i], {
                    classes: 'in-next-month',
                    date: `${nextMonthCounter}-${selectedDate.getMonth() + 2 === 13 ? 1 : selectedDate.getMonth() + 2}-${selectedDate.getMonth() + 2 === 13 ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear()}`,
                    value: nextMonthCounter
                }];
                nextMonthCounter++;
            }
        }
    }

    const getPrevMonth = () => {
        setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
    }

    const getNextMonth = () => {
        setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
    }
    return {
        daysShort,
        monthNames,
        todayFormatted,
        calendarRows,
        selectedDate,
        getPrevMonth,
        getNextMonth
    }
}

const Calendar: FC = () => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

    const dateClickHandler = (date: string) => {
        console.log(date);
    }

    return (
        <Fragment>
            <div className="container has-text-centered">
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title has-text-centered">Calendar</h1>
                        </div>
                        <p>Selected Month: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
                        <table className="table">
                            <thead>
                                <tr>
                                    {daysShort.map(day => (
                                        <th key={day}>{day}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.values(calendarRows).map((cols: Column[]) => {
                                        return <tr key={cols[0].date}>
                                            {cols.map(col => (
                                                col.date === todayFormatted
                                                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                                        {col.value}
                                                    </td>
                                                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                                            ))}
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>


                        <button className="button" onClick={getPrevMonth}>Prev</button>
                        <button className="button" onClick={getNextMonth}>Next</button>
                    </div>
                </section>
            </div>
        </Fragment>
    );
}

export default Calendar;