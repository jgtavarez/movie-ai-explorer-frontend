export const formatDate = (date: Date | string) => {
  const dDate = new Date(date);
  return dDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
