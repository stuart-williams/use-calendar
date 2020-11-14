import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  IconButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import DateFnsAdapter from "@date-io/date-fns";
import addMonths from "date-fns/addMonths";
import format from "date-fns/format";
import isValid from "date-fns/isValid";
import locale from "date-fns/locale/en-GB";
import useCalendar from "lib/use-calendar";
import { GetServerSideProps, NextPage } from "next";
import Router from "next/router";
import React from "react";

interface Props {
  defaultDate: string;
}

const Calendar: NextPage<Props> = ({ defaultDate }) => {
  const {
    date,
    month,
    weekdays,
    days,
    navigatePrev,
    navigateNext,
  } = useCalendar<Date>({
    dateUtils: new DateFnsAdapter({ locale }),
    defaultDate: new Date(defaultDate),
  });

  const handlePrevClick = () => {
    const d = format(addMonths(date, -1), "yyyy-MM");
    Router.replace(`?d=${d}`, undefined, { shallow: true });
    navigatePrev();
  };

  const handleNextClick = () => {
    const d = format(addMonths(date, 1), "yyyy-MM");
    Router.replace(`?d=${d}`, undefined, { shallow: true });
    navigateNext();
  };

  return (
    <Container maxW="lg" py={4}>
      <Flex alignItems="center" justifyContent="center" py={4}>
        <IconButton
          aria-label="Prev"
          icon={<ChevronLeftIcon boxSize={8} />}
          onClick={handlePrevClick}
        />
        <Text
          fontWeight="bold"
          mx={4}
          width="200px"
          textAlign="center"
          textTransform="uppercase"
        >
          {month.monthAndYear}
        </Text>
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon boxSize={8} />}
          onClick={handleNextClick}
        />
      </Flex>
      <SimpleGrid
        columns={7}
        borderTopWidth="1px"
        borderBottomWidth="1px"
        borderRightWidth="1px"
      >
        {weekdays.map(({ weekdayShort }, i) => (
          <Flex key={i} justifyContent="center" p={1} borderLeftWidth="1px">
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              {weekdayShort}
            </Text>
          </Flex>
        ))}
        {days.map(({ dayOfMonth, isOutsideMonth, isToday }, i) => (
          <Flex
            key={i}
            position="relative"
            minHeight="100px"
            borderLeftWidth="1px"
            borderTopWidth="1px"
            bg={isOutsideMonth ? "gray.100" : "white"}
          >
            <Text
              position="absolute"
              fontSize="sm"
              fontWeight={isToday ? "bold" : "normal"}
              top={2}
              right={2}
            >
              {dayOfMonth}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date = new Date(String(context.query.d));

  return {
    props: {
      defaultDate: format(isValid(date) ? date : new Date(), "yyyy-MM"),
    },
  };
};

export default Calendar;
