import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './subpages/loan/loan.component';
import { GrowthBusinessComponent } from './subpages/growth-business/growth-business.component';
import { ContactsNetworkComponent } from './subpages/contacts-network/contacts-network.component';
import { CalculateComponent } from './subpages/loan/calculate/calculate.component';
import { EnterDataComponent } from './subpages/loan/enter-data/enter-data.component';
import { CompareComponent } from './subpages/loan/compare/compare.component';
import { RequestLoanComponent } from './subpages/loan/request-loan/request-loan.component';
import { GetLoanComponent } from './subpages/loan/get-loan/get-loan.component';
import { SubpagesComponent } from './subpages/subpages.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'subpages', component: SubpagesComponent,
    children: [
      { path: 'contacts-network', component: ContactsNetworkComponent},
      { path: 'growth-bussiness', component: GrowthBusinessComponent},
      { path: 'loan', component: LoanComponent,
      children: [
        { path: 'calculate', component: CalculateComponent},
        { path: 'enter-data', component: EnterDataComponent},
        { path: 'compare', component: CompareComponent},
        { path: 'request-loan', component: RequestLoanComponent},
        { path: 'get-loan', component: GetLoanComponent}
      ]}
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
   ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }