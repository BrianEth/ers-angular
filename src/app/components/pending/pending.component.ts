import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRole } from '../../models/employeeRole.model';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementType } from '../../models/reimbursementType.model';

@Component({
  selector: 'app-history',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  loggedUser: Employee = new Employee(window.sessionStorage.getItem('loggedUser'),'',
    window.sessionStorage.getItem('userFirstName'),
    window.sessionStorage.getItem('userLastName'),
    window.sessionStorage.getItem('userEmail'),
    new EmployeeRole(1,window.sessionStorage.getItem('userRole')));
  constructor(private reimbursementService: ReimbursementService) {

   }

   public reimbursement: Reimbursement = new Reimbursement(0,0.00,'',null,new ReimbursementType(1,"OTHER"));
   debugReimbursement: Reimbursement = new Reimbursement(1,0.00,'',null,new ReimbursementType(1,"OTHER"));
  reimbursements: Reimbursement[];

  ngOnInit() {
    this.getHistory();
  }


  getHistory(): void {

    this.reimbursementService.getPendingHistory()
    .subscribe( 
      mappedReimbursements => {
        this.reimbursements = <Reimbursement[]> mappedReimbursements,
        error => console.log(`error: ${error}`),
        console.log(`mapped reimbursements: ${mappedReimbursements[0].id}`);
        console.log(`reimbursement Array: ${this.reimbursements}`);
        
      }
    )
  
  }

  public print(reimbursement: Reimbursement) : string {
    return `Request number: ${reimbursement.id} for the amount of: $${reimbursement.amount}`;
  }

   public printDate(reimbursement: Reimbursement) : string {
     return `From: ${reimbursement.requested.dayOfWeek}, ${reimbursement.requested.month} ${reimbursement.requested.dayOfMonth}`;
   }

  debugReimbursementCall(): void {
    this.reimbursementService.debugReimbursement()
    .subscribe(
      mappedReimbursement => {
        console.log(mappedReimbursement),
        console.log(`reimbursement Req: ${this.debugReimbursement.id} ${this.debugReimbursement.amount}`),
        this.debugReimbursement = mappedReimbursement,
        error => console.log(`error: ${error}`);
      }

    )
  }

}
