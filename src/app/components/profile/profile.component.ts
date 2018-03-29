import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { EmployeeRole } from '../../models/employeeRole.model';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    loggedUser: User = new User(window.sessionStorage.getItem('loggedUser'),'',
    window.sessionStorage.getItem('userFirstName'),
    window.sessionStorage.getItem('userLastName'),
    window.sessionStorage.getItem('userEmail'),
    new EmployeeRole(1,window.sessionStorage.getItem('userRole')));

    oldInfo: User = new User(this.loggedUser.username, '',
    this.loggedUser.firstName, this.loggedUser.lastName,this.loggedUser.email,this.loggedUser.employeeRole);

    //disable fields by default so user doesnt accidently alter info.
    
  constructor(private employeeService: EmployeeService) {
   }

  ngOnInit() {
    this.disableFields();
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
  }

  updateProfile(): void {
    this.disableFields();
    if(this.loggedUser === this.oldInfo)
    {
      console.log("no changes detected");
        //no change in info. do nothing.
    } else {
      console.log("updating info");
      this.employeeService.updateUser(this.loggedUser);
        //info changed, call server.
    }


  }
}
