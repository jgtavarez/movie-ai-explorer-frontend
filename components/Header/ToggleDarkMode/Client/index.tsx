"use client";
import { MoonIcon } from "@/components/icons";

interface Props {
  action: () => void;
}

export const ToggleDarkModeClient = ({ action }: Props) => {
  return (
    <button
      onClick={() => action()}
      type="button"
      className="inline-flex items-center p-2 mr-1 text-sm font-medium rounded-lg text-gray-900 dark:text-white"
    >
      <MoonIcon />
    </button>
  );
};
