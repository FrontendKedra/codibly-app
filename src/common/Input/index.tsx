import { useQueryParameter } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { Header, IdInput, InputContainer } from "./styled";
import React from 'react';

export const Input = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const id = useQueryParameter("id");

  const filterId = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({ key: "id", value: event.target.value });
  };

  return (
    <InputContainer>
      <Header>Filter table</Header>
      <IdInput
        onChange={filterId}
        value={id || ""}
        type="number"
        min="1"
        step="1"
        placeholder="Numbers only"
      />
    </InputContainer>
  );
};
