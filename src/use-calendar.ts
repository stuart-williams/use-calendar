import { useMemo, useRef, useState } from "react";

import type { IUtils } from "@date-io/core/IUtils";

export interface Month {
  month: string;
  monthAndYear: string;
}

export interface Weekday<TDate> {
  date: TDate;
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
  readonly weekdays: Weekday<TDate>[];
  readonly days: Day<TDate>[];
  readonly navigateTo: (date: TDate) => void;
  readonly navigatePrev: () => void;
  readonly navigateNext: () => void;
  readonly navigateToday: () => void;
}

export interface CalendarOptions<TDate> {
  dateUtils: IUtils<TDate>;
  defaultDate?: TDate;
}

const useCalendar = <TDate = unknown>({
  dateUtils,
  defaultDate,
}: CalendarOptions<TDate>): Calendar<TDate> => {
  const utilsRef = useRef(dateUtils);
  const [date, setDate] = useState(
    dateUtils.startOfDay(defaultDate || (dateUtils.date() as TDate))
  );

  return useMemo(() => {
    const utils = utilsRef.current;
    const first = utils.startOfWeek(utils.startOfMonth(date));
    const last = utils.endOfWeek(utils.endOfMonth(date));
    const days: Day<TDate>[] = [];

    let curr = first;
    while (utils.isBefore(curr, last)) {
      days.push({
        date: curr,
        dayOfMonth: utils.format(curr, "dayOfMonth"),
        isOutsideMonth: !utils.isSameMonth(date, curr),
        isToday: utils.isSameDay(curr, utils.date() as TDate),
      });
      curr = utils.addDays(curr, 1);
    }

    return {
      date,
      month: {
        month: utils.format(date, "month"),
        monthAndYear: utils.format(date, "monthAndYear"),
      },
      weekdays: utils.getWeekArray(date)[0].map((d) => ({
        date: d,
        weekday: utils.format(d, "weekday"),
        weekdayShort: utils.format(d, "weekdayShort"),
      })),
      days,
      navigateTo: (d: TDate) => setDate(utils.startOfDay(d)),
      navigatePrev: () => setDate(utils.addMonths(date, -1)),
      navigateNext: () => setDate(utils.addMonths(date, 1)),
      navigateToday: () => setDate(utils.startOfDay(utils.date() as TDate)),
    };
  }, [date]);
};

export default useCalendar;
