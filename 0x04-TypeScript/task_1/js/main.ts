interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience: number,
  location: string,
  [propName: string]: any,
}


interface Directors extends Teacher {
  numberOfReports: number,
}

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
}

interface StudentClassMethInterface {
  workOnHomework(): string,
  displayName(): string,
}


class StudentClass implements StudentClassMethInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(): string {
    return "Currrently working";
  }
  displayName(): string {
    return this.firstName;
  }
}