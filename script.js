function getAverage(testScores) {
  if (testScores.length === 0) {
    return 0;
  }

  const sum = testScores.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return sum / testScores.length;
}

console.log(getAverage([2, 2, 2]));
