# `useCalendar`

Simple calendar logic in a React hook

## Installation

```bash
npm i use-cal
// or
yarn add use-cal
```

`useCalendar` was designed to work with the date management library of your choice.

```bash
npm i @date-io/date-fns date-fns
// or
npm i @date-io/moment moment
// or
npm i -s @date-io/luxon luxon
// or
npm i -s @date-io/dayjs dayjs
```

## Usage

```tsx
import DateFnsAdapter from "@date-io/date-fns";
import locale from "date-fns/locale/en-GB";
import addMonths from "date-fns/addMonths";

const { date, month, weekdays, days, navigatePrev, navigateNext } = useCalendar<
  Date
>({
  dateUtils: new DateFnsAdapter({ locale }),
  // Optionally set the initial date value of the calendar. Defaults to today.
  defaultDate: addMonths(new Date(), 1),
});
```

See [example](https://github.com/stuart-williams/use-calendar/blob/main/pages/index.tsx) for full usage.
