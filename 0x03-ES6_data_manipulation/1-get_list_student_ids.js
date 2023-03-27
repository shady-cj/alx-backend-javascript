export default function getListStudentIds(arr) {
  if (arr instanceof Array) {
    return arr.map((item) => item.id);
  }
  return [];
}
