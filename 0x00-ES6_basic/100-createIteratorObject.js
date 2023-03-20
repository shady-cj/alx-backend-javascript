export default function createIteratorObject(report) {
  const employeeNames = [];

  for (const dept of Object.keys(report.allEmployees)) {
    const employees = report.allEmployees[dept];
    employeeNames.push(...employees);
  }

  return {
    [Symbol.iterator]() {
      return {

        next() {
          if (employeeNames.length) {
            const currentEmployee = employeeNames.shift();
            return { done: false, value: currentEmployee };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
