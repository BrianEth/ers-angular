import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  logout() :void {
    window.sessionStorage.setItem('loggedUser', null);
    window.sessionStorage.setItem('userFirstName', null);
  }

}
