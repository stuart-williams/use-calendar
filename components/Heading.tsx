import { Text, Theme } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Heading as Props } from "lib";
import React, { FunctionComponent } from "react";

interface StyledProps {
  theme: Theme;
}

const StyledText = styled(Text)`
  @media (min-width: ${(props: StyledProps) => props.theme.breakpoints.base}) {
    ::after {
      content: "${(props: StyledProps) => props["data-short"]}";
    }
  }

  @media (min-width: ${(props: StyledProps) => props.theme.breakpoints.md}) {
    ::after {
      content: "${(props: StyledProps) => props["data-long"]}";
    }
  }
`;

const Heading: FunctionComponent<Props> = ({ long, short }) => (
  <StyledText
    data-long={long}
    data-short={short}
    fontSize="sm"
    textTransform="uppercase"
  />
);

export default Heading;
