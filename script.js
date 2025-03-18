// Build a Gradebook App
// Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function named getAverage that takes an array of test scores as a parameter and returns the average score.
// 1. You should have a function named getAverage.
// 2. Your getAverage function should return a number.
// 3. getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]) should return 71.7.
// 4. getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]) should return 85.4.
// 5. getAverage([38, 99, 87, 100, 100, 100, 100, 100, 100, 100]) should return 92.4.
// 6. Your getAverage function should return the average score of the test scores.
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

// 2. You should have a function named getGrade that takes a student score as a parameter and
// returns a string representing a letter grade based on the score. Here are the scores
// and their corresponding letter grades:
// Score Range	Grade
// 100	"A+"
// 90 - 99	"A"
// 80 - 89	"B"
// 70 - 79	"C"
// 60 - 69	"D"
// 0 - 59	"F"
// 7. You should have a function named getGrade.
// 8. Your getGrade function should return "A+" if the score is 100.
// 9. Your getGrade function should return "A" if the score is between 90 and 99.
// 10. Your getGrade function should return "B" if the score is between 80 and 89.
// 11. Your getGrade function should return "C" if the score is between 70 and 79.
// 12. Your getGrade function should return "D" if the score is between 60 and 69.
// 13. Your getGrade function should return "F" if the score is between 0 and 59.
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

// 3. You should have a function named hasPassingGrade that takes a score as a parameter and
// returns either true or false depending on if the score corresponds to a passing grade.
// 4. The hasPassingGrade function should use the getGrade function to get the letter grade,
// and use it to determine if the grade is passing. A passing grade is anything different from "F".
// 14. You should have a function named hasPassingGrade.
// 15. Your hasPassingGrade function should return a boolean value.
// 16. Your hasPassingGrade function should return true if the grade is an "A".
// 17. Your hasPassingGrade function should return false if the grade is an "F".
// 18. Your hasPassingGrade function should return true for all passing grades.
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

// 5. You should have a function named studentMsg that takes an array of scores and
// a student score as the parameters. The function should return a string with the format:
// "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
// "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
// Replace average-goes-here with the average of total scores and grade-goes-here with the student's grade. Use getAverage
// to get the average score and getGrade to get the student's grade.
// 19. You should have a function named studentMsg.
// 20. studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37) should return the following message:
// "Class average: 71.7. Your grade: F. You failed the course.".
// 21. studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100) should return the following message: "Class average:
// 50.8. Your grade: A+. You passed the course.".
// Failed: 22. Your studentMsg function should return the correct message based on the student's score and the class average.
function studentMsg(scores, score) {
  const classAverage = getAverage(scores);
  const grade = getGrade(score);
  const passing = hasPassingGrade(grade);
  let msg = `Class average: ${classAverage}. Your grade: ${grade}.`;
  if (passing) {
    msg += " You passed the course.";
  } else {
    msg += " You failed the course.";
  }
  return msg;
}
