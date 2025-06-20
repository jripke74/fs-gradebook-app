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

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

function studentMsg(scores, score) {
  const classAverage = getAverage(scores);
  const passing = hasPassingGrade(score);
  const grade = getGrade(score);
  console.log(passing);
  let msg = `Class average: ${classAverage}. Your grade: ${grade}.`;
  if (passing) {
    msg += " You passed the course.";
  } else {
    msg += " You failed the course.";
  }
  return msg;
}
