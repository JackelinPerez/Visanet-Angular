import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private statusLoan = new BehaviorSubject({calculate: '1', data: '2', compare: '3', request: '4', set:'5'});
  public statusLoanP = this.statusLoan.asObservable()

  private calculateLoans = new BehaviorSubject({});
  calculateLoan = this.calculateLoans.asObservable();

  private finalLoans = new BehaviorSubject([]);
  finalLoan = this.finalLoans.asObservable();

  objLoanData: {};
  arrLoanFinal : any;

  constructor() { }

  
  getLoanData(obj: Object){
    this.objLoanData= {...obj};
  console.log(this.objLoanData)
  this.calculateLoans.next(this.objLoanData);
  }

  getLoanFinal(arr){
    this.arrLoanFinal = arr;
    this.finalLoans.next(this.arrLoanFinal);
  }

  getStatusData(status: any){
    this.statusLoan.next(status);
  }
}
