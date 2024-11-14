export const scoreToStars = (score: number, base: 10 | 100): number => {
  const maxScore = base === 10 ? 10 : 100;
  const scaledScore = (score / maxScore) * 5;

  return Math.max(1, Math.min(5, Math.round(scaledScore)));
};
