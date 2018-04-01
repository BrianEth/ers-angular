import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementService } from '../../service/reimbursement.service';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.css']
})
export class AllPendingComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService) { }

  reimbursements: Reimbursement[];
  message: string;

  ngOnInit() {
    this.getHistory();
  }

  public print(reimbursement: Reimbursement) : string {
    return `Request number: ${reimbursement.id} of employee: ${reimbursement.requester.username} for the amount of: $${reimbursement.amount}`;
  }

   public printDate(reimbursement: Reimbursement) : string {
     return `${reimbursement.requested.dayOfWeek}, ${reimbursement.requested.month} ${reimbursement.requested.dayOfMonth}`;
   }

   

  getHistory(): void {

    this.reimbursementService.getAllPendingHistory()
    .subscribe( 
      mappedReimbursements => {
        this.reimbursements = <Reimbursement[]> mappedReimbursements,
        error => console.log(`error: ${error}`),
        console.log(`mapped reimbursements: ${mappedReimbursements[0].id}`);
        console.log(`reimbursement Array: ${this.reimbursements}`);
        
      }
    )
  
  }

  approve(id: number): void {
    console.log("id in approve:   "+id);
    // this.reimbursementService.finalizeReimbursement(id, 3)
    // .subscribe(
    //   mappedMessage => {
    //     this.message = <string> mappedMessage;
    //   }
    // )
  }

  deny(id: number): void {
    this.reimbursementService.finalizeReimbursement(id, 2)
    .subscribe(
      mappedMessage => {
        this.message = <string> mappedMessage;
      }
    )
  }


}
