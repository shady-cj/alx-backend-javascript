export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (const employeeName of reportWithIterator) {
    employees += `${employeeName} | `;
  }
  return employees.slice(0, -3);
}
