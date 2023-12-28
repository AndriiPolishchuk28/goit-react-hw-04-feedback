export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbacks,
  percentage,
}) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedbacks}</p>
      <p>Positive feedback: {percentage}%</p>
    </>
  );
};
