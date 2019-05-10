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

  objLoanData: {};

  constructor() { }
  
  getLoanData(obj: Object){
    this.objLoanData= {...obj};
  console.log(this.objLoanData)
  this.calculateLoans.next(this.objLoanData);
  }
  getStatusData(status: any){
    this.statusLoan.next(status);
  }
}
