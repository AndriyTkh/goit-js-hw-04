function getExtremeScores(scores) {
  const obj = {
    best: null,
    worst: null,
  };

  obj.best = Math.max(...scores);
  obj.worst = Math.min(...scores);

  return obj;
}
