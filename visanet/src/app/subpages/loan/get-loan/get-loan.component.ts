import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';

@Component({
  selector: 'app-get-loan',
  templateUrl: './get-loan.component.html',
  styleUrls: ['./get-loan.component.sass']
})

export class GetLoanComponent implements OnInit {

  infoLoan: any;

  constructor(private localService: LocalService) {
    this.localService.finalLoan.subscribe(obj => {
      this.infoLoan = obj;
      console.log(obj)
      console.log(this.infoLoan)

    });
  }
  ngOnInit() {
  }

}
