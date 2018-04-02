import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employees: Employee[];


  ngOnInit() {
  this.getEmployees();
  }


  getEmployees() {
    this.employeeService.allEmployees()
    .subscribe(
      mappedEmployees => {
        this.employees=<Employee[]> mappedEmployees;
      }
    )
  }
}
