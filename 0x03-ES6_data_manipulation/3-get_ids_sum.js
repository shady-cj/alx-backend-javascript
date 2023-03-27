export default function getStudentIdsSum(students) {
  return students.reduce((total, current) => total + current.id, 0);
}
