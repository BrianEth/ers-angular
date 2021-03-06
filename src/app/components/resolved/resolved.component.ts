import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRole } from '../../models/employeeRole.model';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementType } from '../../models/reimbursementType.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './resolved.component.html',
  styleUrls: ['./resolved.component.css']
})
export class ResolvedComponent implements OnInit {
  loggedUser: Employee = new Employee(window.sessionStorage.getItem('loggedUser'),'',
    window.sessionStorage.getItem('userFirstName'),
    window.sessionStorage.getItem('userLastName'),
    window.sessionStorage.getItem('userEmail'),
    new EmployeeRole(1,window.sessionStorage.getItem('userRole')),0);
    userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    
  constructor(private reimbursementService: ReimbursementService, private router: Router) {

   }

   public reimbursement: Reimbursement = new Reimbursement(0,0.00,'',null,new ReimbursementType(1,"OTHER"));
  reimbursements: Reimbursement[];

  ngOnInit() {
    if(this.userRole == "MANAGER") {
      this.isManager=true;
  } else {
    this.isManager=false;
  }
  if(!this.userFirstName || this.isManager){
    this.router.navigate(['/denied']);
  }
    this.getHistory();
  }


  public print(reimbursement: Reimbursement) : string {
    return `Request number: ${reimbursement.id} for the amount of: $${reimbursement.amount}`;
  }

   public printDate(reimbursement: Reimbursement) : string {
     return `${reimbursement.requested.dayOfWeek}, ${reimbursement.requested.month} ${reimbursement.requested.dayOfMonth}`;
   }

   public printDateResolved(reimbursement: Reimbursement) : string {
    return `${reimbursement.resolved.dayOfWeek}, ${reimbursement.resolved.month} ${reimbursement.resolved.dayOfMonth}`;    
   }



  getHistory(): void {

    this.reimbursementService.getFinalizedHistory()
    .subscribe(
      mappedReimbursements => {
        this.reimbursements = <Reimbursement[]> mappedReimbursements;
        //error => console.log(`error: ${error}`),
        //error => console.log(`error: ${error}`),
        //console.log(mappedReimbursement);
      }
    )
  
  }

}
