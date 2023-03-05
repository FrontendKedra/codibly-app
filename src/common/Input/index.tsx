import { useQueryParameter } from "../../useQueryParameter";
import { useReplaceQueryParameter } from "../../useReplaceQueryParameter";
import { Header, IdInput, InputContainer } from "./styled";
import { useEffect, useRef } from "react";

export const Input = () => {
  const replaceQueryParameter = useReplaceQueryParameter();
  const id = useQueryParameter("id");

  const ref = useRef<HTMLInputElement>(null);

  const focusRef = () => {
    ref.current?.focus();
  };

  const filterId = (event: React.ChangeEvent<HTMLInputElement>) => {
    replaceQueryParameter({ key: "id", value: event.target.value });
  };

  useEffect(() => {
    focusRef();
  }, [id]);

  return (
    <InputContainer>
      <Header>Filter table</Header>
      <IdInput
        ref={ref}
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
