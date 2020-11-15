# `useCalendar`

Simple calendar logic for React.

## Installation

```bash
npm i use-cal
```

`useCalendar` was designed to work with the date management library of your choice.

```bash
npm i @date-io/date-fns date-fns
// or
npm i @date-io/moment moment
// or
npm i @date-io/luxon luxon
// or
npm i @date-io/dayjs dayjs
```

## Usage

```tsx
import useCalendar from "use-cal";
import DateFnsAdapter from "@date-io/date-fns";
import locale from "date-fns/locale/en-GB";

const { date, month, weekdays, days, navigatePrev, navigateNext } = useCalendar<
  Date
>({
  dateUtils: new DateFnsAdapter({ locale }),
  // Optionally set the initial date value of the calendar. Defaults to today.
  defaultDate: new Date(),
});
```

See [example](https://github.com/stuart-williams/use-calendar/blob/main/pages/index.tsx) for full usage.
