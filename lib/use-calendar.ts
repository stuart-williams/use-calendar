import { IUtils } from '@date-io/core/IUtils';
import { useState } from 'react';

import { Heading } from './types';

interface CalendarOptions<TDate> {
  dateUtils: IUtils<TDate>;
  defaultDate?: TDate;
}

interface CalendarState {
  headings: Heading[];
}

const useCalendar = <TDate = unknown>({
  dateUtils,
  defaultDate,
}: CalendarOptions<TDate>): CalendarState => {
  const [currentDate] = useState(defaultDate || dateUtils.date());
  // const first = dateUtils.startOfWeek(dateUtils.startOfMonth(current));
  // const last = dateUtils.endOfWeek(dateUtils.endOfMonth(current));

  const headings = dateUtils.getWeekArray(currentDate)[0].map((date) => ({
    long: dateUtils.format(date, "weekday"),
    short: dateUtils.format(date, "weekdayShort"),
  }));

  return {
    headings,
  };
};

export default useCalendar;
