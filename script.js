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

function getGrade(studentScore) {
  if (studentScore === 100) {
    return "A+";
  } else if (studentScore >= 90) {
    return "A";
  } else if (studentScore >= 80) {
    return "B";
  } else if (studentScore >= 70) {
    return "C";
  } else if (studentScore >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function hasPassingGrade(studentScore) {
  return getGrade(studentScore) !== "F";
}

function studentMsg(scores, studentScore) {
  const classAverage = getAverage(scores);
  const passing = hasPassingGrade(studentScore);
  const grade = getGrade(studentScore);
  console.log(passing);
  let msg = `Class average: ${classAverage}. Your grade: ${grade}.`;
  if (passing) {
    msg += " You passed the course.";
  } else {
    msg += " You failed the course.";
  }
  return msg;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
// Class average: 71.7. Your grade: F. You failed the course.
