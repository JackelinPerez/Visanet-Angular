import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD:visanet/src/app/home/loan/calculate/calculate.component.ts
import { LocalService } from 'src/app/shared/local.service';

=======
import { LocalService } from 'src/shared/local.service';
 
>>>>>>> f4d4a3d5e29da8d47ab0eb4dc45744c16e364b80:visanet/src/app/subpages/loan/calculate/calculate.component.ts
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


