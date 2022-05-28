import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationComponent } from './registration.component';

const routes: Routes = [
  {
    path: "",
    component: RegistrationComponent,
    children: [
      {
        path: "",
        component: RegistrationFormComponent
      },
      {
        path: "complete",
        component: RegistrationCompleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
