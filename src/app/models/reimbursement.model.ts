import { ReimbursementStatus } from "./reimbursementStatus.model";
import { ReimbursementType } from "./reimbursementType.model";
import { Employee } from "./employee.model";


export class Reimbursement {
    id: number;
    requested: any;
    resolved: any;
    amount: number;
    description: string;
    receipt: Object;
    requester : Employee;
    approver: Employee;
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

    print() : string {
        return `Reimbursement (${this.id})`;
    }

}