export default function createIteratorObject(report) {
    const employeeNames = []

    for (let dept in report.allEmployees) {
        let employees = report.allEmployees[dept]
        employeeNames.push(...employees)
    }

    return {
        [Symbol.iterator]() {
            return {

                next() {
                    if (employeeNames.length) {
                        const currentEmployee = employeeNames.shift()
                        return { done: false, value: currentEmployee }

                    } else {
                        return { done: true, value: undefined }
                    }

                }
            }
        }
    }
}