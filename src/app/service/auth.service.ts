import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _token: string = null;

  constructor(private http: HttpClient, private router:Router) {
  }

  login(credentials: { email, password }) {
    return this.http.post<{ token: string }>('/login', credentials)
      .pipe(tap(response => this._token = response.token));
  }

  get isConnected(){
    return this._token != null;
  }

  get token() {
    return this._token;
  }

  logout() {
    this._token = null;
    this.router.navigate(['']);
  }
}
