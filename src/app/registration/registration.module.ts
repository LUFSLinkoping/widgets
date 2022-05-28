import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationComponent } from './registration.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';


@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationComponent,
    RegistrationCompleteComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatStepperModule
  ]
})
export class RegistrationModule { }
