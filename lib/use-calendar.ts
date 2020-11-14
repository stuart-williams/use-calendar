import { IUtils } from "@date-io/core/IUtils";
import { useState } from "react";

export interface Month {
  month: string;
  monthAndYear: string;
}

export interface Weekday {
  weekday: string;
  weekdayShort: string;
}

export interface Day<TDate> {
  date: TDate;
  dayOfMonth: string;
  isOutsideMonth: boolean;
  isToday: boolean;
}

export interface Calendar<TDate> {
  readonly date: TDate;
  readonly month: Month;
  readonly weekdays: Weekday[];
  readonly days: Day<TDate>[];
  readonly navigatePrev: () => void;
  readonly navigateNext: () => void;
}

export interface CalendarOptions<TDate> {
  dateUtils: IUtils<TDate>;
  defaultDate?: TDate;
}

const useCalendar = <TDate = unknown>({
  dateUtils: d,
  defaultDate,
}: CalendarOptions<TDate>): Calendar<TDate> => {
  const [date, setDate] = useState(defaultDate || d.date());
  const first = d.startOfWeek(d.startOfMonth(date));
  const last = d.endOfWeek(d.endOfMonth(date));
  const days: Day<TDate>[] = [];

  let curr = first;
  while (d.isBefore(curr, last)) {
    days.push({
      date: curr,
      dayOfMonth: d.format(curr, "dayOfMonth").padStart(2, "0"),
      isOutsideMonth: !d.isSameMonth(date, curr),
      isToday: d.isSameDay(curr, d.date()),
    });
    curr = d.addDays(curr, 1);
  }

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
    days,
    navigatePrev: () => setDate(d.addMonths(date, -1)),
    navigateNext: () => setDate(d.addMonths(date, 1)),
  };
};

export default useCalendar;
