import { toggleTheme } from "@/lib/actions/ui";
import { ToggleDarkModeClient } from "./Client";

export const ToggleDarkMode = () => {
  return <ToggleDarkModeClient action={toggleTheme} />;
};
