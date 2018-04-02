import { Component, OnInit } from '@angular/core';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-all-pending',
  templateUrl: './all-pending.component.html',
  styleUrls: ['./all-pending.component.css']
})
export class AllPendingComponent implements OnInit {

  constructor(private reimbursementService: ReimbursementService, private employeeService: EmployeeService, private router: Router) {
    this.router=router;
   }
  userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    input;
  reimbursements: Reimbursement[];
  employees: Employee[];
  message: string;
  clientMessage: string;

  ngOnInit() {
    this.getEmployees();
    if(this.userRole == "MANAGER") {
      this.isManager=true;
  } else {
    this.router.navigate(['/denied'])
    this.isManager=false;
  }
  if(!this.userFirstName){
    this.router.navigate(['/denied']);
  }
    this.getHistory();
    this.clientMessage = '';

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
        document.getElementById("reimbursementList").removeAttribute("disabled"); 
      }
    )
  
  }

  getEmployees() {
    this.employeeService.allEmployees()
    .subscribe(
      mappedEmployees => {
        this.employees=<Employee[]> mappedEmployees;
      }
    )
  }

  search(index: number) {
    document.getElementById("search").setAttribute("disabled","disabled");
    document.getElementById("searchButton").setAttribute("disabled","disabled");

    console.log(`input: ${index}`); /*
    this.reimbursementService.getUserPendingHistory(this.employees[index].id)
    .subscribe( 
      mappedReimbursements => {
        this.reimbursements = <Reimbursement[]> mappedReimbursements,
        error => console.log(`error: ${error}`),
        document.getElementById("reimbursementList").removeAttribute("disabled"); 
      }
    ) */

  }

  trackEmployee(index, employee) {
    console.log(`index: ${index} ${employee.username}`);
    return employee.id;
  }


  reset() {
    this.input='';
    document.getElementById("search").removeAttribute("disabled");
    document.getElementById("searchButton").removeAttribute("disabled");
    this.getHistory();
  }


  approve(index: number): void {
    let id = this.reimbursements[index].id;
    console.log("id in approve: "+id);
    this.clientMessage =`Approving Reimbursement #${id}, Please Wait.`;
     this.reimbursementService.finalizeReimbursement(id, 3, 'APPROVED')
     .subscribe(
       mappedMessage => {
         this.message = <string> mappedMessage;
         console.log(this.message);
         this.clientMessage =`Reimbursement #${id} is now Approved.`;
         this.getHistory();
       }
    )
  }

  deny(index: number): void {
    let id = this.reimbursements[index].id;
    console.log("id in deny: " + id)
    this.clientMessage =`Declining Reimbursement #${id}, Please Wait.`;
    this.reimbursementService.finalizeReimbursement(id, 2, 'DECLINED')
    .subscribe(
      mappedMessage => {
        this.message = <string> mappedMessage;
        this.clientMessage =`Reimbursement #${id} is now Declined.`;
        this.getHistory();
      }
    )
  }

  makeUserWait() {
    document.getElementById("reimbursementList").setAttribute("disabled","disabled");
  }


}
