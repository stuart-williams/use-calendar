import { IUtils } from "@date-io/core/IUtils";
import { useState } from "react";

import { Day, Month, Weekday } from "./types";

interface CalendarOptions<TDate> {
  dateUtils: IUtils<TDate>;
  defaultDate?: TDate;
}

interface CalendarState<TDate> {
  readonly currentDate: TDate;
  readonly month: Month;
  readonly weekdays: Weekday[];
  readonly days: Day[];
  readonly navigatePrev: () => void;
  readonly navigateNext: () => void;
}

const useCalendar = <TDate = unknown>({
  dateUtils: d,
  defaultDate,
}: CalendarOptions<TDate>): CalendarState<TDate> => {
  const [currentDate, setCurrentDate] = useState(defaultDate || d.date());
  const firstDayOfMonth = d.startOfWeek(d.startOfMonth(currentDate));
  const lastDayOfMonth = d.endOfWeek(d.endOfMonth(currentDate));

  return {
    currentDate,
    month: {
      month: d.format(currentDate, "month"),
      monthAndYear: d.format(currentDate, "monthAndYear"),
    },
    weekdays: d.getWeekArray(currentDate)[0].map((date) => ({
      weekday: d.format(date, "weekday"),
      weekdayShort: d.format(date, "weekdayShort"),
    })),
    days: (function () {
      const days = [];
      let curr = firstDayOfMonth;

      while (d.isBefore(curr, lastDayOfMonth)) {
        days.push({
          isOutsideMonth: !d.isSameMonth(currentDate, curr),
          dayOfMonth: d.format(curr, "dayOfMonth").padStart(2, "0"),
        });

        curr = d.addDays(curr, 1);
      }

      return days;
    })(),
    navigatePrev: () => setCurrentDate(d.addMonths(currentDate, -1)),
    navigateNext: () => setCurrentDate(d.addMonths(currentDate, 1)),
  };
};

export default useCalendar;
