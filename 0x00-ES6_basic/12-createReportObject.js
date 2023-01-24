export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(Emplist) {
      return Object.keys(Emplist).length;
    },
  };
}
