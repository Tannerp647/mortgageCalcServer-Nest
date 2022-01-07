//export class Output {
    // monthlyPayment: number;
    // totalPayment: number;
    // totalInterest: number;
    // annualPayment: number;

    // constructor(monthlyPayment: number, totalPayment: number, totalInterest: number, annualPayment: number) {
    //     this.monthlyPayment = monthlyPayment;
    //     this.totalPayment = totalPayment;
    //     this.totalInterest = totalInterest;
    //     this.annualPayment = annualPayment;
    // };
    //shortcut to achieve the same result as above
//};

export class Output {
    constructor (
        public monthlyPayment: number,
        public totalPayment: number,
        public totalInterest: number,
        public annualPayment: number,
    ) {}
};