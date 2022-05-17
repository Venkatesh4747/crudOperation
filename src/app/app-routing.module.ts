import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { GuardsGuard } from './guards/guards.guard';

const routes: Routes = [
  {path:'home',component:EmployeeDashboardComponent,resolve:{
    data:GuardsGuard
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
