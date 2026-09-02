const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;
  const requiredRate =
    runsNeeded > 0 && ballsLeft > 0 ? (runsNeeded / ballsLeft) * 6 : 0;
  let verdict = "";
  if (runsNeeded <= 0) {
    return "Won";
  } else if (ballsLeft <= 0) {
    return "Lost";
  } else if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
