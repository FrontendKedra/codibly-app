import { useHistory, useLocation } from "react-router-dom";

interface Props<ItemType> {
  key: string;
  value: ItemType;
}

export const useReplaceQueryParameter = () => {
  const history = useHistory();
  const location = useLocation();

  return <ItemType>({ key, value }: Props<ItemType>) => {
    const searchParams = new URLSearchParams(location.search);
    if (!value || !key) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value.toString());
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  };
};
