export const formatDate = (date: Date | string) => {
  const dDate = new Date(date);
  return dDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const timeAgo = (date: Date | string): string => {
  const now = new Date();
  const past = new Date(date);
  const diff = now.getTime() - past.getTime();

  const timeUnits = [
    { unit: "year", value: 365 * 24 * 60 * 60 },
    { unit: "month", value: 30 * 24 * 60 * 60 },
    { unit: "week", value: 7 * 24 * 60 * 60 },
    { unit: "day", value: 24 * 60 * 60 },
    { unit: "hour", value: 60 * 60 },
    { unit: "minute", value: 60 },
    { unit: "second", value: 1 },
  ];

  const seconds = Math.floor(diff / 1000);

  for (const { unit, value } of timeUnits) {
    const amount = Math.floor(seconds / value);
    if (amount >= 1) {
      return `${amount} ${unit}${amount > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
};
