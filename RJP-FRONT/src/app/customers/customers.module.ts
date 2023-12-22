import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersService } from '../services/customers.service';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './components/details/details.component';
import { OpenAccountFormComponent } from './components/open-account-form/open-account-form.component';
import { ModalModule } from 'ngx-bootstrap/modal'; // for the modal layer f2 bootstrap
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomersComponent,
    DetailsComponent,
    OpenAccountFormComponent
  ],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    CustomersService
  ],
  bootstrap: []
})
export class CustomersModule { }
