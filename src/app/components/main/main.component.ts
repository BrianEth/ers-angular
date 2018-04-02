import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    title = 'Welcome to ERS';
    userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    
    constructor(private router: Router) {
      this.router = router;
    }
    ngOnInit(){
      if(this.userRole == "MANAGER") {
          this.isManager=true;
      } else {
        this.isManager=false;
      }
      if(!this.userFirstName){
        this.router.navigate(['/denied']);
      }
    }
}
