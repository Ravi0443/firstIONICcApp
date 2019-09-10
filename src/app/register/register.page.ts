import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user = new User();

  constructor(private userservice: UserService, private router: Router) { }

  ngOnInit() {

  }
  registerForm() {
      this.userservice.register(this.user).subscribe(result => {
        console.log(result);
        this.router.navigate(['/login']);
      });
  }

}
