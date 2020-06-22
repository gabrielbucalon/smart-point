import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observer';
import { environment as env } from '../../../../environments/environment';
import { Login } from '../../login/components/login/models/login.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any>{
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}
