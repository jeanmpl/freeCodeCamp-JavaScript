function getAverage(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
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
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(arr, score) {
  const average = getAverage(arr);
  const grade = getGrade(score);
  if (grade !== "F") {
    return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
  }
  return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
