import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

 
const routes : Routes = [
    {
        path: '',
        redirectTo : '/customers',
        pathMatch : 'full'
    },
    {
        path: 'customers',
        loadChildren: () => import ("./customers/customers.module").then(m => m.CustomersModule)
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule {}

