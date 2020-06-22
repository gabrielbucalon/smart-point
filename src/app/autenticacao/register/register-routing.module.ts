import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrarComponent, RegisterComponent } from './components';


export const LoginRoutes: Routes = [
  {
    path: 'register',
    component: RegistrarComponent,
    children: [{ path: '', component: RegisterComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(LoginRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
