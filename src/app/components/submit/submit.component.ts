import { Component, OnInit } from '@angular/core';
import { ReimbursementService } from '../../service/reimbursement.service';
import { Reimbursement } from '../../models/reimbursement.model';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  constructor(private ReimbursementService: ReimbursementService) { }

  public reimbursement: Reimbursement = new Reimbursement(NaN,NaN,'',null,null);

  ngOnInit() {
  }

  submit(): void {
    //disable fields while processing


  }

}
