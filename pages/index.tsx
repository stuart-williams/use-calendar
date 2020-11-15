import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import DateFnsAdapter from "@date-io/date-fns";
import addDays from "date-fns/addDays";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import isSameDay from "date-fns/isSameDay";
import isValid from "date-fns/isValid";
import enGB from "date-fns/locale/en-GB";
import enUS from "date-fns/locale/en-US";
import es from "date-fns/locale/es";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import useCalendar from "src/use-calendar";

const locales = {
  "en-GB": enGB,
  "en-US": enUS,
  es,
};

const events = [
  {
    title: "Today",
    start: new Date(),
  },
  {
    title: "Today",
    start: new Date(),
  },
  {
    title: "Tomorrow",
    start: addDays(new Date(), 1),
  },
];

interface Props {
  d: string;
}

const Calendar: NextPage<Props> = ({ d }) => {
  const router = useRouter();
  const defaultDate = new Date(d);
  const locale = locales[router.locale];
  const dateUtils = new DateFnsAdapter({ locale });
  const calendar = useCalendar({ dateUtils, defaultDate });

  const handlePrevClick = () => {
    const d = format(addMonths(calendar.date, -1), "yyyy-MM");
    router.replace(`?d=${d}`, undefined, { shallow: true });
    calendar.navigatePrev();
  };

  const handleNextClick = () => {
    const d = format(addMonths(calendar.date, 1), "yyyy-MM");
    router.replace(`?d=${d}`, undefined, { shallow: true });
    calendar.navigateNext();
  };

  return (
    <Container maxW="lg" py={8}>
      <Box bg="white" overflow="hidden" borderRadius="lg" borderWidth="1px">
        <Flex alignItems="center" justifyContent="center" py={4}>
          <IconButton
            aria-label="Prev"
            icon={<ChevronLeftIcon boxSize={8} />}
            onClick={handlePrevClick}
          />
          <Text
            width="200px"
            fontWeight="bold"
            textAlign="center"
            textTransform="uppercase"
          >
            {calendar.month.monthAndYear}
          </Text>
          <IconButton
            aria-label="Next"
            icon={<ChevronRightIcon boxSize={8} />}
            onClick={handleNextClick}
          />
        </Flex>
        <SimpleGrid columns={7}>
          {calendar.weekdays.map(({ weekdayShort }, i) => (
            <Flex key={i} justifyContent="center" p={2}>
              <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
                {weekdayShort}
              </Text>
            </Flex>
          ))}
          {calendar.days.map((day, i) => (
            <Flex
              key={i}
              p={1}
              minHeight="100px"
              flexDirection="column"
              bg={day.isOutsideMonth ? "gray.50" : "white"}
              borderColor="gray.200"
              borderTopWidth="1px"
              borderRightWidth={(i + 1) % 7 === 0 ? "0px" : "1px"}
            >
              <Text
                flex={1}
                width="100%"
                fontSize="sm"
                textAlign="right"
                fontWeight={day.isToday ? "bold" : "normal"}
              >
                {day.dayOfMonth}
              </Text>
              {events
                .filter((ev) => isSameDay(ev.start, day.date))
                .map((ev) => (
                  <Box>
                    <Button size="xs" colorScheme="blue" isFullWidth>
                      {ev.title}
                    </Button>
                  </Box>
                ))}
            </Flex>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = new Date(String(context.query.d));

  return {
    props: {
      d: format(isValid(date) ? date : new Date(), "yyyy-MM"),
    },
  };
};

export default Calendar;
