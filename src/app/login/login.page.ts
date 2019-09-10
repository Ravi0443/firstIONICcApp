import { Component, OnInit } from '@angular/core';
import { User } from '../register/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user = new User();
  constructor(private userservice: UserService, private route: Router) { 
    
    if(this.userservice.isLoggedIn()){
      this.route.navigateByUrl('/menu/products');
    }
  }

  ngOnInit() {
  }
  loginForm() {
    this.userservice.login(this.user).subscribe(result => {
      localStorage.setItem('token', result.token);
      console.log(result);
      this.route.navigateByUrl('/menu/products');
    });
  }

}
