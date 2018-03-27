import { EmployeeRole } from "./employeeRole.model";


export class User {
    username: string;
    password: string;
    firstName: string;
    lastnName: string;
    email: string;
    employeeRole: EmployeeRole;

    constructor(username: string, password: string, firstname: string, lastname: string, email: string, employeeRole: EmployeeRole) {
        this.username = username;
        this.password = password;

        //mapped from api?
        this.firstName = firstname;
        this.lastnName = lastname;
        this.email= lastname;
        this.employeeRole = employeeRole
    }
}