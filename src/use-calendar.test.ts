import DateFnsAdapter from "@date-io/date-fns";
import { renderHook } from "@testing-library/react-hooks";
import locale from "date-fns/locale/en-GB";
import MockDate from "mockdate";

import useCalendar from "./use-calendar";

describe("useCalendar", () => {
  let dateUtils: DateFnsAdapter;

  beforeEach(() => {
    MockDate.set("2000-01-01");

    dateUtils = new DateFnsAdapter({ locale });
  });

  afterEach(() => {
    MockDate.reset();
  });

  it("should create default calendar", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    const { date, month, weekdays, days } = result.current;

    expect(date).toEqual(new Date());

    expect(month).toEqual({
      month: "January",
      monthAndYear: "January 2000",
    });

    expect(weekdays).toEqual([
      { weekday: "Monday", weekdayShort: "Mon" },
      { weekday: "Tuesday", weekdayShort: "Tue" },
      { weekday: "Wednesday", weekdayShort: "Wed" },
      { weekday: "Thursday", weekdayShort: "Thu" },
      { weekday: "Friday", weekdayShort: "Fri" },
      { weekday: "Saturday", weekdayShort: "Sat" },
      { weekday: "Sunday", weekdayShort: "Sun" },
    ]);

    expect(days).toMatchSnapshot();
  });

  it("should create calendar starting at date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: new Date("2000-02-01"),
      })
    );

    const { date, month, days } = result.current;

    expect(date).toEqual(new Date("2000-02-01"));

    expect(month).toEqual({
      month: "February",
      monthAndYear: "February 2000",
    });

    expect(days).toMatchSnapshot();
  });
});
