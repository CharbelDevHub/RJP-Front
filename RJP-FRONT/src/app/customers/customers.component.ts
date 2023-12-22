import { Component, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';
import { CustomersService } from '../services/customers.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Customer } from '../models/customer.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit, OnDestroy {
  
  private subscription!: Subscription;
  public readonly detailsRoute = '/customers/:id'
  private customersService = inject(CustomersService);
  private readonly modalService = inject(BsModalService);  
  public customers!: Customer[];
  public modalRef?: BsModalRef;
  public selectedCustomerId!: number;


  ngOnInit(): void {
    this.subscription = this.customersService.getAll().subscribe(customers => { 
       this.customers = customers;
       console.log(this.customers);
    });
  }

  public openModal(id: number ,template: TemplateRef<unknown>): void {
    this.selectedCustomerId = id;
    this.modalRef = this.modalService.show(template, Object.assign({}, { class: 'side-modal' }));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  
}

