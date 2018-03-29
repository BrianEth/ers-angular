
export class ReimbursementStatus {
    id: number;
    status: string;

    /* statuses:
        1. Pending
        2. Declined
        3. Approved

    */

    constructor(id: number, status: string) {
        this.id = id;
        this.status = status;
    }
}