import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './subpages/loan/loan.component';
import { ContactsNetworkComponent } from './subpages/contacts-network/contacts-network.component';
import { GrowthBusinessComponent } from './subpages/growth-business/growth-business.component';
import { CalculateComponent } from './subpages/loan/calculate/calculate.component';
import { EnterDataComponent } from './subpages/loan/enter-data/enter-data.component';
import { CompareComponent } from './subpages/loan/compare/compare.component';
import { RequestLoanComponent } from './subpages/loan/request-loan/request-loan.component';
import { GetLoanComponent } from './subpages/loan/get-loan/get-loan.component';
import { NavbarComponent } from './subpages/navbar/navbar.component';
import { SubpagesComponent } from './subpages/subpages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    GrowthBusinessComponent,
    CalculateComponent,
    ContactsNetworkComponent,
    EnterDataComponent,
    CompareComponent,
    RequestLoanComponent,
    GetLoanComponent,
    NavbarComponent,
    SubpagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }