import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../register/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    userAPI = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  register(user) {
      return this.http.post<any>(this.userAPI + 'register', user);
  }
  login(user: User){
    return this.http.post<any>(this.userAPI + 'login', user);
  }
  isLoggedIn(){
    return !!localStorage.getItem('token');
  }
  
deleteToken() {
  localStorage.removeItem('token');
}
getDecodedToken(){
  const helper = new JwtHelperService();
  const myRawToken = localStorage.getItem('token')
  const decodedToken = helper.decodeToken(myRawToken);
  return decodedToken;
}
getUserId(){
  const decodedToken = this.getDecodedToken();
  const userId = decodedToken.userId;
  return userId;
}

getUserProfile() {
  return this.http.get<any>(this.userAPI  + this.getUserId());
 }
}
