import { IUtils } from "@date-io/core/IUtils";
import { useState } from "react";

import { Day, Month, Weekday } from "./types";

interface CalendarOptions<TDate> {
  dateUtils: IUtils<TDate>;
  defaultDate?: TDate;
}

interface CalendarState<TDate> {
  readonly date: TDate;
  readonly month: Month;
  readonly weekdays: Weekday[];
  readonly days: Day<TDate>[];
  readonly navigatePrev: () => void;
  readonly navigateNext: () => void;
}

const useCalendar = <TDate = unknown>({
  dateUtils: d,
  defaultDate,
}: CalendarOptions<TDate>): CalendarState<TDate> => {
  const [date, setDate] = useState(defaultDate || d.date());
  const firstVisible = d.startOfWeek(d.startOfMonth(date));
  const lastVisible = d.endOfWeek(d.endOfMonth(date));

  return {
    date,
    month: {
      month: d.format(date, "month"),
      monthAndYear: d.format(date, "monthAndYear"),
    },
    weekdays: d.getWeekArray(date)[0].map((date) => ({
      weekday: d.format(date, "weekday"),
      weekdayShort: d.format(date, "weekdayShort"),
    })),
    days: (function () {
      const days: Day<TDate>[] = [];
      let curr = firstVisible;

      while (d.isBefore(curr, lastVisible)) {
        days.push({
          date: curr,
          dayOfMonth: d.format(curr, "dayOfMonth").padStart(2, "0"),
          isOutsideMonth: !d.isSameMonth(date, curr),
          isToday: d.isSameDay(curr, d.date()),
        });

        curr = d.addDays(curr, 1);
      }

      return days;
    })(),
    navigatePrev: () => setDate(d.addMonths(date, -1)),
    navigateNext: () => setDate(d.addMonths(date, 1)),
  };
};

export default useCalendar;
