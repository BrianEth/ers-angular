
export class ReimbursementType{
    id: number;
    type: string;

    /* types:
        1. Other
        2. Course
        3. Certification
        4. Traveling
    */

    constructor(id: number, type: string) {
        this.id = id;
        this.type = type;
    }
}