import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';
import { ReimbursementType } from '../../models/reimbursementType.model';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  types = ['Other','Course','Certification','Travel'];

  constructor(private reimbursementService: ReimbursementService) { }

  public reimbursement: Reimbursement = new Reimbursement(0,0.00,'',null,new ReimbursementType(1,this.types[0]));

  submitted = false;

  userFirstName = window.sessionStorage.getItem('userFirstName');

  onSubmit() {this.submitted=true;}
  ngOnInit() {
  }

  trySubmit(): void {
    //disable fields while processing
     let typeElement = document.getElementById('type');
    // let type = typeElement.attributes[typeElemen]
     //let type = typeElement.options[typeElement.selectedIndex].text;
    //typeElement.selectedIndex

      this.reimbursementService.submitReimbursement(this.reimbursement.amount, this.reimbursement.description, this.reimbursement.type)
      .subscribe(
        mappedReimbursement => {
          console.log(mappedReimbursement);
        }
        
      )


  }

}
