import { toggleTheme } from "./actions";
import { ToggleDarkModeClient } from "./Client";

export const ToggleDarkMode = () => {
  return <ToggleDarkModeClient action={toggleTheme} />;
};
