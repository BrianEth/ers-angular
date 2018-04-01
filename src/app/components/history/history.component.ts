import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { EmployeeRole } from '../../models/employeeRole.model';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementType } from '../../models/reimbursementType.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  loggedUser: Employee = new Employee(window.sessionStorage.getItem('loggedUser'),'',
    window.sessionStorage.getItem('userFirstName'),
    window.sessionStorage.getItem('userLastName'),
    window.sessionStorage.getItem('userEmail'),
    new EmployeeRole(1,window.sessionStorage.getItem('userRole')));
  constructor(private reimbursementService: ReimbursementService) {

   }

   public reimbursement: Reimbursement = new Reimbursement(0,0.00,'',null,new ReimbursementType(1,"OTHER"));
  

  ngOnInit() {
  }

/*
  getHistory(): void {

    this.reimbursementService.getReimbursementHistory()
    .subscribe(
      mappedReimbursement => {
        this.reimbursement = mappedReimbursement,
        error => console.log(`error: ${error}`),
        console.log(mappedReimbursement);
      }
    )
  
  }
*/
}
