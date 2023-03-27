export default function updateStudentGradeByCity(studentList, city, newGrades) {
  return studentList.filter((student) => student.location === city).map((student) => {
    let gradeInfo = null;
    newGrades.forEach((grade) => {
      if (grade.studentId === student.id) {
        gradeInfo = grade;
      }
    });
    return { ...student, grade: gradeInfo ? gradeInfo.grade : 'N/A' };
  });
}
