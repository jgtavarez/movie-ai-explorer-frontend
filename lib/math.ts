export const scoreToStars = (score: number, base: 10 | 100): number => {
  const maxScore = base === 10 ? 10 : 100;
  const scaledScore = (score / maxScore) * 5;

  return Math.max(1, Math.min(5, Math.round(scaledScore)));
};

export const generatePaginationPages = (
  currentPage: number,
  totalPages: number
) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    "...",
    currentPage - 1,
    currentPage,
    currentPage + 1,
    "...",
    totalPages,
  ];
};

export const sleep = (milliseconds: number) => {
  return new Promise((r) => {
    setTimeout(() => {
      r(true);
    }, milliseconds);
  });
};
