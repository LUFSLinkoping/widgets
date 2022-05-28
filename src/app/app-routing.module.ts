import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIframeComponent } from './test-iframe/test-iframe.component';

const routes: Routes = [
  {
    path: "test",
    component: TestIframeComponent
  },
  {
    path: "registration",
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
