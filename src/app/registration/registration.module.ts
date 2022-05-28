import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RegistrationComponent } from './registration.component';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationService } from './registration.service';


@NgModule({
  declarations: [
    RegistrationFormComponent,
    RegistrationComponent,
    RegistrationCompleteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RegistrationRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatStepperModule,
    MatProgressSpinnerModule
  ],
  providers: [
    RegistrationService
  ]
})
export class RegistrationModule { }
