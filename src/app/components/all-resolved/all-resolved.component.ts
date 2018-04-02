import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-resolved',
  templateUrl: './all-resolved.component.html',
  styleUrls: ['./all-resolved.component.css']
})
export class AllResolvedComponent implements OnInit {

  userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
  constructor(private reimbursementService: ReimbursementService, private router: Router) {
    this.router=router;
   }


  reimbursements: Reimbursement[];

  ngOnInit() {
    if(this.userRole == "MANAGER") {
      this.isManager=true;
  } else {
    this.isManager=false;
  }
  if(!this.userFirstName){
    this.router.navigate(['/denied']);
  }
    this.getHistory();
  }


  public print(reimbursement: Reimbursement) : string {
    return `Request number: ${reimbursement.id} of employee: ${reimbursement.requester.username} for the amount of: $${reimbursement.amount}`;
  }

   public printDate(reimbursement: Reimbursement) : string {
     return `${reimbursement.requested.dayOfWeek}, ${reimbursement.requested.month} ${reimbursement.requested.dayOfMonth}`;
   }

   public printDateResolved(reimbursement: Reimbursement) : string {
    return `${reimbursement.resolved.dayOfWeek}, ${reimbursement.resolved.month} ${reimbursement.resolved.dayOfMonth}`;    
   }


  getHistory(): void {

    this.reimbursementService.getAllFinalizedHistory()
    .subscribe( 
      mappedReimbursements => {
        this.reimbursements = <Reimbursement[]> mappedReimbursements,
        error => console.log(`error: ${error}`),
        console.log(`mapped reimbursements: ${mappedReimbursements[0].id}`);
        console.log(`reimbursement Array: ${this.reimbursements}`);
        
      }
    )
  }
}
