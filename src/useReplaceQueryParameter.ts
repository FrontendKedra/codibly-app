import { useHistory, useLocation } from "react-router-dom";

interface Props {
  key: string;
  value: string | number;
}

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  return ({ key, value }: Props) => {
    const searchParams = new URLSearchParams(location.search);
    if (!value) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value.toString());
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
