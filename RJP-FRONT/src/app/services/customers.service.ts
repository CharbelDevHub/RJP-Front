import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENVIRONMENT } from 'src/environments/environment';
import { CustomersEndpoints } from '../enums/api/customers.endpoints';
import { Observable } from 'rxjs';
import { Customer, CustomerDetails, OpenAccountRequest } from '../models/customer.interface';

@Injectable()
export class CustomersService {

  constructor(private readonly http: HttpClient) {}

  public getAll() : Observable<Customer[]> {
    const ep = `${ENVIRONMENT.api.baseUrl}${CustomersEndpoints.ALL}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.get<Customer[]>(ep,{headers});
  }

  public getDetails(id : number) : Observable<CustomerDetails> {
    const ep = `${ENVIRONMENT.api.baseUrl}${CustomersEndpoints.ONE}`.replace(":id",id.toString());
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200' 
    });
    return this.http.get<CustomerDetails>(ep,{headers});
  }

  public openAccount(request: OpenAccountRequest){
    const ep = `${ENVIRONMENT.api.baseUrl}${CustomersEndpoints.OPEN}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    return this.http.post(ep,request,{headers});
  }
  
}
