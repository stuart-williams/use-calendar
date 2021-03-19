import { IUtils } from "@date-io/core/IUtils";
import { useMemo, useRef, useState } from "react";

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
  const utilsRef = useRef(dateUtils);
  const [date, setDate] = useState(defaultDate || (dateUtils.date() as TDate));

  return useMemo(() => {
    const utils = utilsRef.current;
    const first = utils.startOfWeek(utils.startOfMonth(date));
    const last = utils.endOfWeek(utils.endOfMonth(date));
    const days: Day<TDate>[] = [];

    let curr = first;
    while (utils.isBefore(curr, last)) {
      days.push({
        date: utils.startOfDay(curr),
        dayOfMonth: utils.format(curr, "dayOfMonth"),
        isOutsideMonth: !utils.isSameMonth(date, curr),
        isToday: utils.isSameDay(curr, utils.date() as TDate),
      });
      curr = utils.addDays(curr, 1);
    }

    return {
      date: utils.startOfDay(date),
      month: {
        month: utils.format(date, "month"),
        monthAndYear: utils.format(date, "monthAndYear"),
      },
      weekdays: utils.getWeekArray(date)[0].map((d) => ({
        weekday: utils.format(d, "weekday"),
        weekdayShort: utils.format(d, "weekdayShort"),
      })),
      days,
      navigatePrev: () => setDate(utils.addMonths(date, -1)),
      navigateNext: () => setDate(utils.addMonths(date, 1)),
    };
  }, [date]);
};

export default useCalendar;
