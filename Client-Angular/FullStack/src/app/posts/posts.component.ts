import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persons } from '../persons';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userId: string = sessionStorage["userID"]
  @Input()
  persons: Persons = new Persons()

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private utils: UtilsService, private ar: ActivatedRoute) { }

  ngOnInit(): void { }


  addPost() {
    this.notify.emit(false)
  }

}
