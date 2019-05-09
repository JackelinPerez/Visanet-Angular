import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {
  objInfLoan = {};
  amount = 10000;

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
if (this.amount > 1000) return this.amount -= 1000;
 }
  addQuantity(){
if(this.amount < 50000) return this.amount += 1000;
 }
  sendLoanData(){
    return this.objInfLoan;
  }
}
