import { EmployeeRole } from "./employeeRole.model";


export class Employee {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
    employeeRole: EmployeeRole;
    id: number;

    constructor(username: string, password: string, firstname: string, lastname: string, email: string, employeeRole: EmployeeRole, id: number) {
        this.username = username;
        this.password = password;

        //mapped from api?
        this.firstName = firstname;
        this.lastName = lastname;
        this.email= lastname;
        this.employeeRole = employeeRole
        this.id=id;
    }
}