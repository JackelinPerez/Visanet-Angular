import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/shared/local.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.sass']
})

export class CompareComponent implements OnInit {

  months: number;
  amount: number;
  public objFinal: any;

  dataObj: {
  };

  businessInfo = [
    {
      name: 'PRESTAMYPE',
      tcea: 12,
      img: '../../../../assets/img/presta.jpeg',
    },
    {
      name: 'CAJA HUANCAYO',
      tcea: 20,
      img: '../../../../assets/img/caja-huancayo.png'
    },
    {
      name: 'BCP',
      tcea: 20,
      img: '../../../../assets/img/bcp.jpg',

    },
    {
      name: 'CAJA AREQUIPA',
      tcea: 25,
      img: '../../../../assets/img/caja-arequipa.png',
    }
  ];


  constructor(private localService: LocalService) {
    this.localService.calculateLoan.subscribe(obj => {
      this.dataObj = { ...obj };
      this.objFinal = this.compare(obj, this.businessInfo);
    });
  }
  ngOnInit() {

  }

  onChangeCompare(mount, time) {
    const obj = {
      amount: mount,
      months: time,
    }
    this.objFinal = this.compare(obj, this.businessInfo);
  }

  addQuantity(amount) {
    return amount += 1000;
  }

  compare(objServ, businnessArr) {
    return businnessArr.map(elem => {
      const interest = objServ.amount * (elem.tcea * 0.01) * (objServ.months / 12);
      const total = objServ.amount + interest;
      const monthlyPayment = parseFloat((total / objServ.months).toFixed(2));
      return {
        ...elem,
        amount: objServ.amount,
        months: objServ.months,
        interest,
        total,
        monthlyPayment
      };
    }
    )
  }

}
