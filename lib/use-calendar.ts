import { IUtils } from "@date-io/core/IUtils";
import { useMemo, useState } from "react";

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
  dateUtils,
  defaultDate,
}: CalendarOptions<TDate>): Calendar<TDate> => {
  const [date, setDate] = useState(defaultDate || dateUtils.date());

  const calendar = useMemo(() => {
    const first = dateUtils.startOfWeek(dateUtils.startOfMonth(date));
    const last = dateUtils.endOfWeek(dateUtils.endOfMonth(date));
    const days: Day<TDate>[] = [];

    let curr = first;
    while (dateUtils.isBefore(curr, last)) {
      days.push({
        date: curr,
        dayOfMonth: dateUtils.format(curr, "dayOfMonth").padStart(2, "0"),
        isOutsideMonth: !dateUtils.isSameMonth(date, curr),
        isToday: dateUtils.isSameDay(curr, dateUtils.date()),
      });
      curr = dateUtils.addDays(curr, 1);
    }

    return {
      date,
      month: {
        month: dateUtils.format(date, "month"),
        monthAndYear: dateUtils.format(date, "monthAndYear"),
      },
      weekdays: dateUtils.getWeekArray(date)[0].map((date) => ({
        weekday: dateUtils.format(date, "weekday"),
        weekdayShort: dateUtils.format(date, "weekdayShort"),
      })),
      days,
      navigatePrev: () => setDate(dateUtils.addMonths(date, -1)),
      navigateNext: () => setDate(dateUtils.addMonths(date, 1)),
    };
  }, [date]);

  return calendar;
};

export default useCalendar;
