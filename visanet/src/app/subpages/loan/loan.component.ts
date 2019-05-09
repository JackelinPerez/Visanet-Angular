import { Component, OnInit } from '@angular/core';
//observando el estado del router Loan
import { LocalService} from '../../../shared/local.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.sass']
})
export class LoanComponent implements OnInit {
  public statusLoan : any;
  constructor(private localService: LocalService) { }

  ngOnInit() {
    this.localService.statusLoanP.subscribe(calculo =>{
      console.log('LLego: '+ calculo);
      this.statusLoan = calculo;
      
    })
  }
}
