import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonalData } from './personal-data/personal-data.module';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  formData: PersonalData;
  private calculateLoans = new BehaviorSubject({});
  calculateLoan = this.calculateLoans.asObservable();

  objLoanData: {};

  constructor() { }
  getLoanData(obj: Object){
    this.objLoanData= {...obj};
console.log(this.objLoanData)
    this.calculateLoans.next(this.objLoanData);
  }
}