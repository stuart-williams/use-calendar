import DayjsAdapter from "@date-io/dayjs";
import { act, renderHook } from "@testing-library/react-hooks";
import MockDate from "mockdate";

import useCalendar from "./use-calendar";

describe("useCalendar", () => {
  let dateUtils: DayjsAdapter;

  beforeEach(() => {
    MockDate.set(new Date("2021-04-01"));

    dateUtils = new DayjsAdapter();
  });

  it("should create default calendar", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    expect(result.current.date).toEqual(dateUtils.date("2021-04-01"));

    expect(result.current.month).toEqual({
      month: "April",
      monthAndYear: "April 2021",
    });

    expect(result.current.weekdays).toEqual([
      {
        date: dateUtils.date("2021-03-28"),
        weekday: "Sunday",
        weekdayShort: "Sun",
      },
      {
        date: dateUtils.date("2021-03-29"),
        weekday: "Monday",
        weekdayShort: "Mon",
      },
      {
        date: dateUtils.date("2021-03-30"),
        weekday: "Tuesday",
        weekdayShort: "Tue",
      },
      {
        date: dateUtils.date("2021-03-31"),
        weekday: "Wednesday",
        weekdayShort: "Wed",
      },
      {
        date: dateUtils.date("2021-04-01"),
        weekday: "Thursday",
        weekdayShort: "Thu",
      },
      {
        date: dateUtils.date("2021-04-02"),
        weekday: "Friday",
        weekdayShort: "Fri",
      },
      {
        date: dateUtils.date("2021-04-03"),
        weekday: "Saturday",
        weekdayShort: "Sat",
      },
    ]);

    expect(result.current.days).toMatchSnapshot();
  });

  it("should create calendar starting at date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: dateUtils.date("2050-12-25"),
      })
    );

    expect(result.current.date).toEqual(dateUtils.date("2050-12-25"));
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

    expect(result.current.date).toEqual(dateUtils.date("2021-05-01"));
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

    expect(result.current.date).toEqual(dateUtils.date("2021-03-01"));
  });

  it("should navigate to today", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
        defaultDate: dateUtils.date("2050-12-25"),
      })
    );

    act(() => {
      result.current.navigateToday();
    });

    expect(result.current.date).toEqual(dateUtils.date("2021-04-01"));
  });

  it("should navigate to date", () => {
    const { result } = renderHook(() =>
      useCalendar({
        dateUtils,
      })
    );

    act(() => {
      result.current.navigateTo(dateUtils.date("2050-12-25"));
    });

    expect(result.current.date).toEqual(dateUtils.date("2050-12-25"));
  });
});
