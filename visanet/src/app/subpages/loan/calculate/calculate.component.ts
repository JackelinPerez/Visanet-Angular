import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/shared/local.service';
 
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.sass']
})
export class CalculateComponent implements OnInit {

  amount = 10000;
  months = 12;
  interest = 1200;

  objInfLoan = {
    amount: this.amount,
    interest: this.interest,
    months: this.months,
    monthlyPayment: 933.33
  };

  constructor(private localService: LocalService) { }

  ngOnInit() {
}

  calculateLoan() {
    return parseFloat(((this.amount + this.interest)/this.months).toFixed(2));
  }

  onChange(value) {
  this.months = value;
  this.paymentSummary();
  }

  paymentSummary(){
    this.interest = (this.amount*0.12)*(this.months/12);
    this.objInfLoan.amount = this.amount;
    this.objInfLoan.interest = this.interest;
    this.objInfLoan.months = this.months;
    this.objInfLoan.monthlyPayment = this.calculateLoan();
  }

reduceQuantity(){
if (this.amount > 1000) {    
 this.amount -= 1000;
 this.paymentSummary();
 }
}
  addQuantity(){
if(this.amount < 50000) {
this.amount += 1000;
this.paymentSummary();
}
 }


sendLoanData(){
  this.localService.getLoanData(this.objInfLoan);
  this.localService.getStatusData({calculate: '✓', data: '2', compare: '3', request: '4', set:'5'});

  }
}


