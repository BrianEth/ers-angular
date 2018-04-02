import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRole } from '../../models/employeeRole.model';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    loggedUser: Employee = new Employee(window.sessionStorage.getItem('loggedUser'),
                        '','','','',new EmployeeRole(1,window.sessionStorage.getItem('userRole')),0);
    oldInfo: Employee;
    userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    
    
  constructor(private employeeService: EmployeeService, private router: Router) {
    this.router=router;
    //console.log(this.loggedUser.employeeRole); 
  }

  ngOnInit() {
    if(this.userRole == "MANAGER") {
      this.isManager=true;
  } else {
    this.isManager=false;
  }
  if(!this.userFirstName){
    this.router.navigate(['/denied']);
  }
    this.disableFields();
    this.getInfo();

    this.oldInfo = new Employee(this.loggedUser.username, '',
    this.loggedUser.firstName, this.loggedUser.lastName,this.loggedUser.email,this.loggedUser.employeeRole,0);

  }

  enableFieldUsername(): void {
    console.log("enabling");
    document.getElementById("usernamefield").removeAttribute("disabled");
  }

  enableFieldFirstname(): void {
    console.log("enabling");
    document.getElementById("firstnamefield").removeAttribute("disabled");
  }
  enableFieldLastname(): void {
    console.log("enabling");
    document.getElementById("lastnamefield").removeAttribute("disabled");
  }
  enableFieldEmail(): void {
    console.log("enabling");
    document.getElementById("emailfield").removeAttribute("disabled");
  }

  disableFields() {
    document.getElementById("usernamefield").setAttribute("disabled","disabled");
    document.getElementById("firstnamefield").setAttribute("disabled","disabled");
    document.getElementById("lastnamefield").setAttribute("disabled","disabled");
    document.getElementById("emailfield").setAttribute("disabled","disabled");
    document.getElementById("role").setAttribute("disabled","disabled");
  }

  getInfo(): void {
    this.employeeService.getInfo(this.loggedUser)
    .subscribe(
      mappedUser => {
        this.loggedUser=mappedUser;
      }
    );
    
  }

  updateProfile(): void {
    this.disableFields();
    if(this.loggedUser === this.oldInfo)
    {
      console.log("no changes detected");
        //no change in info. do nothing.
    } else {
      console.log("updating info");
      this.employeeService.updateUser(this.loggedUser)
      .subscribe();
        //info changed, call server.
    }


  }
}
