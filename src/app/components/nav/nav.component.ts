import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private employeeService: EmployeeService) {}


  logout() :void {
    window.sessionStorage.setItem('loggedUser', '');
    window.sessionStorage.setItem('userFirstName', '');
    window.sessionStorage.setItem('userRole', '');
    this.employeeService.logout();
  }

}
