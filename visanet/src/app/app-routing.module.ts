import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './home/loan/loan.component';
import { GrowthBusinessComponent } from './home/growth-business/growth-business.component';
import { ContactsNetworkComponent } from './home/contacts-network/contacts-network.component';
import { CalculateComponent } from './home/loan/calculate/calculate.component';
import { EnterDataComponent } from './home/loan/enter-data/enter-data.component';
import { CompareComponent } from './home/loan/compare/compare.component';
import { RequestLoanComponent } from './home/loan/request-loan/request-loan.component';
import { GetLoanComponent } from './home/loan/get-loan/get-loan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: 'loan',
      component: LoanComponent,
      children: [
        {
          path: 'calculate',
          component: CalculateComponent
        },
        {
          path: 'enter-data',
          component: EnterDataComponent
        },
        {
          path: 'compare',
          component: CompareComponent
        },
        {
          path: 'request-loan',
          component: RequestLoanComponent
        },
        {
          path: 'get-loan',
          component: GetLoanComponent
        }
      ]
    },
    {
      path: 'contacts-network',
      component: ContactsNetworkComponent,
    },
    {
      path: 'growth-bussiness',
      component: GrowthBusinessComponent,
    }
    ],
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
