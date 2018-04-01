import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';

@Component({
  selector: 'app-all-resolved',
  templateUrl: './all-resolved.component.html',
  styleUrls: ['./all-resolved.component.css']
})
export class AllResolvedComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService) { }


  reimbursements: Reimbursement[];

  ngOnInit() {
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
