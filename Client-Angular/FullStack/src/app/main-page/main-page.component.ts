import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Persons } from '../persons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  users: Persons[] = [];
  usersToShow: any[] = [];

  sub: Subscription = new Subscription();
  constructor(private srv: UtilsService, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.srv.getUsers().subscribe((data: any) => {
      this.users = data;
      this.usersToShow = data;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  searchUser(data: string) {
    this.usersToShow = this.users.filter(
      (x: any) =>
        x.Name.toLowerCase().startsWith(data) ||
        x.Name.startsWith(data) ||
        x.Name.endsWith(data) ||
        x.Email.startsWith(data) ||
        x.Email.toLowerCase().startsWith(data) ||
        x.Email.endsWith(data)
    );
  }

  anotherPage() {
    this.router.navigate(['/addPer']);
  }
}
