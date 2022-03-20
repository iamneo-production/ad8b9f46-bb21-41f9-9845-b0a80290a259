import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginserFromRemote(user:User):Observable<any>{
    return this._http.post<any>('https://8080-bfddfebaceefadbfcafcedecbddeccfaea.examlyiopb.examly.io/login',user);

  }
}
