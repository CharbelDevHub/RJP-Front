import { Component, Input, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { lastValueFrom } from 'rxjs';
import { OpenAccountRequest } from 'src/app/models/customer.interface';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-open-account-form',
  templateUrl: './open-account-form.component.html',
  styleUrls: ['./open-account-form.component.css']
})

export class OpenAccountFormComponent implements OnInit {
 
  public form!: FormGroup<IOpenAccountForm>;
  private readonly customersService = inject(CustomersService);

  @Input() public modalRef?: BsModalRef;
  @Input() public customerId!: number;
  
  ngOnInit(): void {
    this.form = new FormGroup<IOpenAccountForm>({
      customerId: new FormControl<number>(this.customerId,{nonNullable: true}),
      initialCredit: new FormControl<number>(0,{nonNullable: true, validators: [Validators.required]})
    });
  }

  onSubmit(): void {
    if(!this.form.valid)  return;
    const request = this.form.value as OpenAccountRequest;
    console.log(request);
    lastValueFrom(this.customersService.openAccount(request)).then(() => {
      this.modalRef?.hide();
      alert("Worked");
    }) 
  }
}

interface IOpenAccountForm {
  
  customerId: FormControl<number>;
  initialCredit: FormControl<number>;

}