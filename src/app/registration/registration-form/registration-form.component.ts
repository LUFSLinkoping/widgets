import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberRegisterDto } from '../interfaces/member.interface';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  personalInformation = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/\D+$/)]],
    lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/\D+$/)]],
    personalNumber: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/^\d{6,8}[-|(\s)]{0,1}\d{4}$/)]],
  });
  contactInformation = this.fb.group({
    phoneNumber: ['', [Validators.required, Validators.pattern(/\+?[0-9- ]{8,}/)]],
    emailAdress: ['', [Validators.required, Validators.email]],
    postAdress: ['', [Validators.required, Validators.minLength(4)]],
    zipCode: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(2)]]
  });
  checkboxes = this.fb.group({
    newsletter: [false, Validators.required],
    acceptIntegrityPolicy: [false, Validators.requiredTrue]
  });
    

  sending = false;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }


  onSubmit() {
    this.sending = true;
    const member: MemberRegisterDto = {
      ...this.personalInformation.value,
      ...this.contactInformation.value,
      ...this.checkboxes.value,
    }
    this.registrationService.register(member).subscribe(x => {
      this.sending = false;
      if(x) {
        this.router.navigate(["registration", "complete"]);
      }
      console.log(x);
    })
  }
}
