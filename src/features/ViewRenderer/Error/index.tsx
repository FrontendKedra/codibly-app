import { MainPageLink } from "../../../common/CommonStyles/styled";
import { ErrorContainer, Text } from "./styled";

export const Error = () => (
  <ErrorContainer>
    <Text>
      Something went wrong <br /> Please check your network connection and try
      again
    </Text>
    <MainPageLink to="/">Go back to the main page</MainPageLink>
  </ErrorContainer>
);
