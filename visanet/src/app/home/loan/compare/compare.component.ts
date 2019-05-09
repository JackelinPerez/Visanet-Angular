import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/shared/local.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.sass']
})

export class CompareComponent implements OnInit {

  dataObj: {

  };

  bussinessInfo = [
    /*     {
          name: 'PRESTAMYPE',
          tcea: 12,
          img: '',
          amount: 0,
          monthlyPayment: 0,
          interest: 0,
          total: 0,
    
         },
        {
          name: 'CAJA HUANCAYO',
          tcea: 20,
          img: '',
          amount: 0,
          monthlyPayment: 0,
          interest: 0,
          total: 0,
    
        },
        {
          name: 'BCP',
          tcea: 20,
          img: '',
          amount: 0,
          monthlyPayment: 0,
          interest: 0,
          total: 0,
    
        },
        {
          name: 'CAJA AREQUIPA',
          tcea: 25,
          img: '',
          amount: 0,
          monthlyPayment: 0,
          interest: 0,
          total: 0,
        } */
  ];

  constructor(private localService: LocalService) {
    this.localService.calculateLoans.subscribe(obj => {
      
  /*     this.bussinessInfo.push(
        {
          ...obj,
          name: 'PRESTAMYPE',
          tcea: 12,
          img: '',
        },
        {
          ...obj,
          name: 'CAJA HUANCAYO',
          tcea: 20,
          img: '',
        },
        {
          ...obj,
          name: 'BCP',
          tcea: 20,
          img: '',
        },
        {
          ...obj,
          name: 'CAJA AREQUIPA',
          tcea: 12,
          img: ''
        },

      ); */
    })
  }

  ngOnInit() {

  }

}
