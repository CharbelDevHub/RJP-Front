import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";
import { NgModule } from "@angular/core";
import { DetailsComponent } from "./components/details/details.component";


const routes : Routes = [
  {
    path : '',
    component: CustomersComponent
  },
  {
    path: ':id',
    component: DetailsComponent
  }  
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })


export class CustomersRoutingModule {}
