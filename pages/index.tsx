import DateFnsAdapter from "@date-io/date-fns";
import locale from "date-fns/locale/en-US";
import useCalendar from "lib";
import { NextPage } from "next";
import React from "react";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import Heading from "components/Heading";

const Page: NextPage = () => {
  const calendar = useCalendar<Date>({
    dateUtils: new DateFnsAdapter({ locale }),
  });

  console.log(calendar);

  return (
    <SimpleGrid columns={7}>
      {calendar.headings.map((heading) => (
        <Flex key={heading.short} p={4} justifyContent="center">
          <Heading key={heading.short} {...heading} />
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default Page;
