import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementType } from '../../models/reimbursementType.model';
import { RouterLink, Router } from '@angular/router';
import { isNumber } from 'util';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  types = ['Other','Course','Certification','Travel'];
  userFirstName = window.sessionStorage.getItem('userFirstName');
    userRole = window.sessionStorage.getItem('userRole');
    isManager=false;
    

  constructor(private reimbursementService: ReimbursementService, private router: Router) {
    this.router=router;
   }

  public reimbursement: Reimbursement = new Reimbursement(0,0.00,'',null,new ReimbursementType(1,this.types[0]));
  //public reimbursement: Reimbursement = null;
  clientMessage = "";
  submitted = false;


  onSubmit() {this.submitted=true;}
  ngOnInit() {
    if(this.userRole == "MANAGER") {
      this.isManager=true;
  } else {
    this.isManager=false;
  }
  if(!this.userFirstName){
    this.router.navigate(['/denied']);
  }
    this.clientMessage='';
  }

  trySubmit(): void {
    this.clientMessage='Attempting to submit request now.';
    //disable fields while processing



     let typeElement = document.getElementById('type').textContent;
     console.log(`type: ${typeElement}`)
    console.log(`isnum: ${isNumber(this.reimbursement.amount)} : ${this.reimbursement.amount}`);
    console.log(`desc: ${this.reimbursement.description}`)
    console.log(`type: ${this.reimbursement.type}`)
      if(this.reimbursement.amount > 0 && this.reimbursement.description && this.reimbursement.type){
      this.reimbursementService.submitReimbursement(this.reimbursement.amount, this.reimbursement.description, this.reimbursement.type)
      .subscribe(
        mappedReimbursement => {
          console.log(mappedReimbursement);
          if(mappedReimbursement.message =="Request Submitted."){
            console.log("successful")
            this.clientMessage=mappedReimbursement.message;
            this.reimbursement = null;
            this.submitted = true;
            this.reimbursement= new Reimbursement(0,0.00,'',null,new ReimbursementType(1,this.types[0]));
            //routerLink="/main";
          } else {
            console.log("failed");
          }
        }
      )
    } else {
      this.clientMessage='Something is wrong with your reimbursement request, please double check your fields';
    }


  }

}
