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
