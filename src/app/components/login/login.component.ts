import { Component, OnInit, Injector } from '@angular/core';

//service
import { LoginService } from '../../service/login.service';
import { User } from '../../models/user.model';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title='login';

  constructor(private loginService: LoginService, private router : Router) {
    this.router = router;
   }

  public user: User = new User('','','','','',null);

  ngOnInit() {
  }

  tryLogin(): void{
    document.getElementById("username").setAttribute("disabled","disabled");
    document.getElementById("password").setAttribute("disabled","disabled");
    this.loginService.login(this.user.username,this.user.password)
    .subscribe(
      mappedUser => { 
        this.user = mappedUser;
        console.log(mappedUser);
        if(this.user.firstName){
          window.sessionStorage.setItem('loggedUser', this.user.username);
          window.sessionStorage.setItem('userFirstName', this.user.firstName);

          this.router.navigate(['/main']);
        }else {
          console.log("login failed");
          //todo: fix.
          document.getElementById("username").removeAttribute("disabled");
          
          document.getElementById("password").removeAttribute("disabled");
          
          console.log("element attributes changed");
        }
      },
      //not getting info mapped to user?
      error => console.log(`error: ${error}`)
    )
    //window.sessionStorage
  }
}
