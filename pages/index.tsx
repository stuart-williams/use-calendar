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
          {calendar.month.monthAndYear}
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
        {calendar.weekdays.map(({ weekdayShort }, i) => (
          <Flex key={i} justifyContent="center" p={1} borderLeftWidth="1px">
            <Text fontSize="sm" fontWeight="bold" textTransform="uppercase">
              {weekdayShort}
            </Text>
          </Flex>
        ))}
        {calendar.days.map(({ dayOfMonth, isOutsideMonth, isToday }, i) => (
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
      d: format(isValid(date) ? date : new Date(), "yyyy-MM"),
    },
  };
};

export default Calendar;
