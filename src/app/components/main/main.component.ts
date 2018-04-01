import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    title = 'Welcome to Reimbursement Services';
    userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    

    ngOnInit(){
      if(this.userRole == "MANAGER") {
          this.isManager=true;
      } else {
        this.isManager=false;
      }
    }
}
