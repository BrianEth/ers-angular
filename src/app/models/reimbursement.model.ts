import { ReimbursementStatus } from "./reimbursementStatus.model";
import { ReimbursementType } from "./reimbursementType.model";


export class Reimbursement {
    id: number;
    //requested
    //resolved
    amount: number;
    description: string;
    //receipt
    //requester
    //approver
    status: ReimbursementStatus;
    type: ReimbursementType;

    constructor(id: number, amount: number,description: string, status: ReimbursementStatus, type: ReimbursementType) {
        this.id = id;
        this.amount = amount;
        this.status = status;
        this.description = description;
        this.status = status;
        this.type = type;
    }

}