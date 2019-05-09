import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  public calculateLoans = new BehaviorSubject({});
  calculateLoan = this.calculateLoans.asObservable();

  objLoanData: {};

  constructor() { }
  getLoanData(obj: Object){
    this.objLoanData= {...obj};
    this.calculateLoans.next(this.objLoanData);
  }
}
