import { useHeaderHeight } from '@react-navigation/elements';

export const useCustomHeaderHeight = () => {
  const headerHeight = useHeaderHeight();
  return headerHeight;
};
