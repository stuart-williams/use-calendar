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
import isBefore from "date-fns/isBefore";
import locale from "date-fns/locale/en-US";
import useCalendar from "lib";
import { NextPage } from "next";
import React from "react";

const Page: NextPage = () => {
  const {
    currentDate,
    month,
    weekdays,
    days,
    navigatePrev,
    navigateNext,
  } = useCalendar({
    dateUtils: new DateFnsAdapter({ locale }),
  });

  return (
    <Container maxW="lg" py={8}>
      <Flex alignItems="center" justifyContent="center" py={4}>
        <IconButton
          aria-label="Prev"
          icon={<ChevronLeftIcon boxSize={8} />}
          onClick={navigatePrev}
          isDisabled={isBefore(addMonths(currentDate, -1), new Date())}
        />
        <Text fontWeight="bold" mx={4} width="200px" textAlign="center">
          {month.monthAndYear}
        </Text>
        <IconButton
          aria-label="Next"
          icon={<ChevronRightIcon boxSize={8} />}
          onClick={navigateNext}
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
            <Text fontSize="sm" fontWeight="bold">
              {weekdayShort}
            </Text>
          </Flex>
        ))}
        {days.map(({ isOutsideMonth, dayOfMonth }, i) => (
          <Flex
            key={i}
            position="relative"
            minHeight="100px"
            borderLeftWidth="1px"
            borderTopWidth="1px"
            bg={isOutsideMonth ? "gray.100" : "white"}
          >
            <Text position="absolute" fontSize="sm" top={2} right={2}>
              {dayOfMonth}
            </Text>
          </Flex>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Page;
