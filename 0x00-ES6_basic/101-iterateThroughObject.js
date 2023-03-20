export default function iterateThroughObject(reportWithIterator) {
    let employees = ""
    for (let employeeName of reportWithIterator) {
        employees += `${employeeName} | `
    }
    return employees.slice(0, -3)
}