import { useState } from "react";

type UseOptimisticReturn<T> = [
  T,
  (updater: (current: T) => T) => void,
  (action: () => Promise<unknown>, revertValue?: T) => Promise<unknown>
];

// react/useOptimistic is not working really well in the latest next versions
export const useOptimistic = <T,>(initialValue: T): UseOptimisticReturn<T> => {
  const [state, setState] = useState<T>(initialValue);

  const setOptimistic = (updater: (current: T) => T) => {
    setState((current) => updater(current));
  };

  const handleOptimisticUpdate = async (
    action: () => Promise<unknown>,
    revertValue?: T
  ) => {
    const previousValue = state;

    try {
      if (revertValue !== undefined) {
        setState(revertValue);
      }
      await action();
    } catch (error) {
      console.error("Error during optimistic update:", error);
      setState(previousValue);
    }
  };

  return [state, setOptimistic, handleOptimisticUpdate];
};
