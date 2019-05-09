import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {
  objInfLoan = {};
  amount = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.paymentSummary(10000, 12));  
  }

  calculateLoan(amount: number, months: number) {
    return ((amount*(100+months))/(100*months)).toFixed(2);

  }

  paymentSummary(amount: number, months: number){
    return {
      loan: amount,
      time: months,
      totalPayment: (amount * (100 + months))/100
    }
  }
  reduceQuantity(){
/*     if (this.amount >= 1000) return this.amount -= 1000;
 */  }
  addQuantity(){
    return this.amount += 1000;
  }
  sendLoanData(){
    return this.objInfLoan;
  }
}
