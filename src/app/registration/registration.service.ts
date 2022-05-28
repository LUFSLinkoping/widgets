import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MemberRegisterDto } from './interfaces/member.interface';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient
  ) { }

  private handleError(name: string, data: any) {
    return (error: HttpErrorResponse) => {
      if (error.status === 0) {
        console.error(`${name} | An error occurred:`, error.error);
      } else {
        console.error(`${name} | Backend returned code ${error.status}, body was: `, error.error);
      }
      return throwError(() => new Error(`${name} | Something bad happened; please try again later.`));
    } 
  }

  register(data: MemberRegisterDto) {
    console.dir(data);
    return this.httpClient.post(this.apiUrl + "member", data)
      .pipe(
        catchError(this.handleError('register', data))
      )
  }

}
