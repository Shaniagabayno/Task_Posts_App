import { Tasks } from './../tasks';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persons } from '../persons';

@Component({
  selector: 'app-user-todosand-posts',
  templateUrl: './user-todosand-posts.component.html',
  styleUrls: ['./user-todosand-posts.component.css'],
})
export class UserTodosandPostsComponent implements OnInit {
  userId: string = '';
  personData: Persons = new Persons();

  topDiv: boolean = true;
  bottomDiv: boolean = true;

  sub: Subscription = new Subscription();
  constructor(private ar: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((details: any) => {
      this.userId = details.id;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
