import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { LoanComponent } from './home/loan/loan.component';
import { ContactsNetworkComponent } from './home/contacts-network/contacts-network.component';
import { GrowthBusinessComponent } from './home/growth-business/growth-business.component';
import { CalculateComponent } from './home/loan/calculate/calculate.component';
import { EnterDataComponent } from './home/loan/enter-data/enter-data.component';
import { CompareComponent } from './home/loan/compare/compare.component';
import { RequestLoanComponent } from './home/loan/request-loan/request-loan.component';
import { GetLoanComponent } from './home/loan/get-loan/get-loan.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
=======
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
>>>>>>> f4d4a3d5e29da8d47ab0eb4dc45744c16e364b80

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
<<<<<<< HEAD
    NavbarComponent

=======
    NavbarComponent,
    SubpagesComponent
>>>>>>> f4d4a3d5e29da8d47ab0eb4dc45744c16e364b80
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }