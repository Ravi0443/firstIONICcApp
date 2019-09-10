import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  userDetails;
  id: string;
  users: any = [];

  pages = [
    {
      title: 'Products',
      url: '/menu/products'
    },
    {
      title: 'home',
      url: '/menu/home'
    }
  ];

  selectedPath = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });
  }
  ngOnInit() {
    if(this.userService.isLoggedIn()) {
      this.route.params.subscribe((params: Params)  => {
        this.id = params.id;
        this.userService.getUserProfile().subscribe(data => {
        this.users = data;
        console.log(this.users);
      });

    });

    } else {
      console.log('No suser login')
    }

  }
  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }
}
