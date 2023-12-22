import { Component } from '@angular/core';
import { OnDestroy, OnInit, inject } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { CustomerDetails } from 'src/app/models/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private readonly customersService = inject(CustomersService);
  private readonly route = inject(ActivatedRoute);
  public details!: CustomerDetails;
  public customerId!: number;

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.paramMap.subscribe((params) => {
        var id = params.get('id');
        if (!id) {
          return;
        }
        this.customerId = Number(id);
        this.getDetails();
      })
    );
  }

  private getDetails(): void {
    this.subscriptions.push(
      this.customersService.getDetails(this.customerId).subscribe((data) => {
        this.details = data;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
}
