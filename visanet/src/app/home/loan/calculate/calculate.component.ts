import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {
  objInfLoan = {};
  constructor() { }

  ngOnInit() {
    // console.log(this.calculateLoan(10000, 12));  
  }
  calculateLoan(amount: number, months: number) {
    return (amount * (100 + months))/months;
  }

  paymentSummary(amount: number, months: number){
    return {
      loan: amount,
      time: months,
      totalPayment: amount * (100 + months)
    }
  }
  reduceQuantity(amount:number){
    if (amount >= 1000) return amount= amount - 1000;
  }
  addQuantity(amount:number){
    return amount= amount + 1000;
  }
  sendLoanData(){
    return this.objInfLoan;
  }
}
