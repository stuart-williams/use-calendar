import DateFnsAdapter from "@date-io/date-fns";
import { act, renderHook } from "@testing-library/react-hooks";
import locale from "date-fns/locale/en-GB";
import MockDate from "mockdate";

import useCalendar from "./use-calendar";

describe("useCalendar", () => {
  let dateUtils: DateFnsAdapter;

  beforeEach(() => {
    MockDate.set("2000-01-01:09:51");

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

    expect(result.current.date).toEqual(new Date("2000-01-01:00:00"));

    expect(result.current.month).toEqual({
      month: "January",
      monthAndYear: "January 2000",
    });

    expect(result.current.weekdays).toEqual([
      {
        date: new Date("1999-12-27"),
        weekday: "Monday",
        weekdayShort: "Mon",
      },
      {
        date: new Date("1999-12-28"),
        weekday: "Tuesday",
        weekdayShort: "Tue",
      },
      {
        date: new Date("1999-12-29"),
        weekday: "Wednesday",
        weekdayShort: "Wed",
      },
      {
        date: new Date("1999-12-30"),
        weekday: "Thursday",
        weekdayShort: "Thu",
      },
      {
        date: new Date("1999-12-31"),
        weekday: "Friday",
        weekdayShort: "Fri",
      },
      {
        date: new Date("2000-01-01"),
        weekday: "Saturday",
        weekdayShort: "Sat",
      },
      {
        date: new Date("2000-01-02"),
        weekday: "Sunday",
        weekdayShort: "Sun",
      },
    ]);

    expect(result.current.days).toMatchSnapshot();
  });

  it("should create calendar starting at date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: new Date("2050-12-25:09:51"),
      })
    );

    expect(result.current.date).toEqual(new Date("2050-12-25:00:00"));

    expect(result.current.month).toEqual({
      month: "December",
      monthAndYear: "December 2050",
    });

    expect(result.current.days).toMatchSnapshot();
  });

  it("should navigate into the future", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    act(() => {
      result.current.navigateNext();
    });

    expect(result.current.date).toEqual(new Date("2000-02-01:00:00"));
    expect(result.current.days).toMatchSnapshot();

    act(() => {
      result.current.navigateNext();
    });

    expect(result.current.date).toEqual(new Date("2000-03-01:00:00"));
    expect(result.current.days).toMatchSnapshot();
  });

  it("should navigate into the past", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    act(() => {
      result.current.navigatePrev();
    });

    expect(result.current.date).toEqual(new Date("1999-12-01:00:00"));
    expect(result.current.days).toMatchSnapshot();

    act(() => {
      result.current.navigatePrev();
    });

    expect(result.current.date).toEqual(new Date("1999-11-01:00:00"));
    expect(result.current.days).toMatchSnapshot();
  });

  it("should navigate to today", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: new Date("2050-12-25:09:51"),
      })
    );

    expect(result.current.date).toEqual(new Date("2050-12-25:00:00"));

    act(() => {
      result.current.navigateToday();
    });

    expect(result.current.date).toEqual(new Date("2000-01-01:00:00"));
  });

  it("should navigate to date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    expect(result.current.date).toEqual(new Date("2000-01-01:00:00"));

    act(() => {
      result.current.navigateTo(new Date("2050-12-25:09:51"));
    });

    expect(result.current.date).toEqual(new Date("2050-12-25:00:00"));
  });
});
