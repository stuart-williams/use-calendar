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
  dateUtils,
  defaultDate,
}: CalendarOptions<TDate>): CalendarState<TDate> => {
  const [currentDate, setCurrentDate] = useState(
    defaultDate || dateUtils.date()
  );

  return {
    currentDate,
    month: {
      month: dateUtils.format(currentDate, "month"),
      monthAndYear: dateUtils.format(currentDate, "monthAndYear"),
    },
    weekdays: dateUtils.getWeekArray(currentDate)[0].map((date) => ({
      weekday: dateUtils.format(date, "weekday"),
      weekdayShort: dateUtils.format(date, "weekdayShort"),
    })),
    days: (function () {
      let curr = dateUtils.startOfWeek(dateUtils.startOfMonth(currentDate));
      const last = dateUtils.endOfWeek(dateUtils.endOfMonth(currentDate));
      const days = [];

      while (dateUtils.isBefore(curr, last)) {
        days.push({
          isOutsideMonth: !dateUtils.isSameMonth(currentDate, curr),
          dayOfMonth: dateUtils.format(curr, "dayOfMonth").padStart(2, "0"),
        });

        curr = dateUtils.addDays(curr, 1);
      }

      return days;
    })(),
    navigatePrev: () => setCurrentDate(dateUtils.addMonths(currentDate, -1)),
    navigateNext: () => setCurrentDate(dateUtils.addMonths(currentDate, 1)),
  };
};

export default useCalendar;
