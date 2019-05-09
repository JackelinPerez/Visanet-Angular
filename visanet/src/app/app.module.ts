import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoanComponent } from './home/loan/loan.component';
import { ContactsNetworkComponent } from './home/contacts-network/contacts-network.component';
import { GrowthBusinessComponent } from './home/growth-business/growth-business.component';
import { CalculateComponent } from './home/loan/calculate/calculate.component';
import { EnterDataComponent } from './home/loan/enter-data/enter-data.component';
import { CompareComponent } from './home/loan/compare/compare.component';
import { RequestLoanComponent } from './home/loan/request-loan/request-loan.component';
import { GetLoanComponent } from './home/loan/get-loan/get-loan.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoanComponent,
    ContactsNetworkComponent,
    GrowthBusinessComponent,
    CalculateComponent,
    EnterDataComponent,
    CompareComponent,
    RequestLoanComponent,
    GetLoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
