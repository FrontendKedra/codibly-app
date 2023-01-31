import { MainPageLink } from "../../../common/CommonStyles/styled";
import { ErrorContainer, Text } from "./styled";
import React from 'react';

export const Error: React.FC = () => (
  <ErrorContainer>
    <Text>
      Something went wrong <br /> Please check your network connection and try
      again
    </Text>
    <MainPageLink href="/">Go back to the main page</MainPageLink>
  </ErrorContainer>
);
