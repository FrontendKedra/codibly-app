import { MainPageLink } from "../../../common/CommonStyles/styled";
import { Input } from "../../../common/Input";
import { NoItemsText } from "./styled";
import React from "react";

export const NoResult: React.FC = () => (
  <>
    <Input />
    <NoItemsText>
      No items with chosen numbers found <br /> Please choose a different id, or
      go back to the main page
    </NoItemsText>
    <MainPageLink to="/">Go back to the main page</MainPageLink>
  </>
);
