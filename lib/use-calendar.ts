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
  const utils = useRef(dateUtils);
  const [date, setDate] = useState(defaultDate || dateUtils.date());

  const calendar = useMemo(() => {
    const _ = utils.current;
    const first = _.startOfWeek(_.startOfMonth(date));
    const last = _.endOfWeek(_.endOfMonth(date));
    const days: Day<TDate>[] = [];

    let curr = first;
    while (_.isBefore(curr, last)) {
      days.push({
        date: curr,
        dayOfMonth: _.format(curr, "dayOfMonth").padStart(2, "0"),
        isOutsideMonth: !_.isSameMonth(date, curr),
        isToday: _.isSameDay(curr, _.date()),
      });
      curr = _.addDays(curr, 1);
    }

    return {
      date,
      month: {
        month: _.format(date, "month"),
        monthAndYear: _.format(date, "monthAndYear"),
      },
      weekdays: _.getWeekArray(date)[0].map((date) => ({
        weekday: _.format(date, "weekday"),
        weekdayShort: _.format(date, "weekdayShort"),
      })),
      days,
      navigatePrev: () => setDate(_.addMonths(date, -1)),
      navigateNext: () => setDate(_.addMonths(date, 1)),
    };
  }, [date]);

  return calendar;
};

export default useCalendar;
