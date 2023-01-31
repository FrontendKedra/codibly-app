import { useLocation } from "react-router-dom";

export const useQueryParameter = (key: string): string | null => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(key);
};
