import DateFnsAdapter from "@date-io/date-fns";
import { act, renderHook } from "@testing-library/react-hooks";
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

    expect(result.current.date).toEqual(new Date());

    expect(result.current.month).toEqual({
      month: "January",
      monthAndYear: "January 2000",
    });

    expect(result.current.weekdays).toEqual([
      { weekday: "Monday", weekdayShort: "Mon" },
      { weekday: "Tuesday", weekdayShort: "Tue" },
      { weekday: "Wednesday", weekdayShort: "Wed" },
      { weekday: "Thursday", weekdayShort: "Thu" },
      { weekday: "Friday", weekdayShort: "Fri" },
      { weekday: "Saturday", weekdayShort: "Sat" },
      { weekday: "Sunday", weekdayShort: "Sun" },
    ]);

    expect(result.current.days).toMatchSnapshot();
  });

  it("should create calendar starting at date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: new Date("2050-12-25"),
      })
    );

    expect(result.current.date).toEqual(new Date("2050-12-25"));

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

    expect(result.current.date).toEqual(new Date("2000-02-01"));
    expect(result.current.days).toMatchSnapshot();

    act(() => {
      result.current.navigateNext();
    });

    expect(result.current.date).toEqual(new Date("2000-03-01"));
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

    expect(result.current.date).toEqual(new Date("1999-12-01"));
    expect(result.current.days).toMatchSnapshot();

    act(() => {
      result.current.navigatePrev();
    });

    expect(result.current.date).toEqual(new Date("1999-11-01"));
    expect(result.current.days).toMatchSnapshot();
  });
});
