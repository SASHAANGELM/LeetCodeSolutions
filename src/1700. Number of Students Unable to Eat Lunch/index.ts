export function countStudents(students: number[], sandwiches: number[]): number {
  let i = 0;
  let j = 0;
  let counter = 0;
  while (students.length > 0 && counter < students.length) {
    const sandwich = sandwiches[i];
    const student = students[j];
    if (sandwich === student) {
      students.splice(j, 1);
      counter = 0;
      i++;
    } else {
      j++;
      counter++;
    }
    if (j >= students.length) {
      j = 0;
    }
  }
  return students.length;
}
