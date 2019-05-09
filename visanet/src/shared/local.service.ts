import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  private calculateLoans = new BehaviorSubject({});
  calculateLoan = this.calculateLoans.asObservable();

  objLoanData: {};

  constructor() { }
  getLoanData(obj: Object){
    this.objLoanData= {...obj};
    console.log(this.objLoanData);

    this.calculateLoans.next(this.objLoanData);
  }
}
