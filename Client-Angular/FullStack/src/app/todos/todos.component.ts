import { Persons } from './../persons';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  userId: string = '';
  persons: Persons = new Persons();

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  notify2: EventEmitter<Persons> = new EventEmitter<Persons>();
  

  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();
  sub3: Subscription = new Subscription();

  constructor(
    private utils: UtilsService,
    private ar: ActivatedRoute,
    private router :Router
  ) {}

  ngOnInit(): void {
    this.sub = this.ar.params.subscribe((element: any) => {
      this.userId = element.id;
      this.sub2 = this.utils.getUser(this.userId).subscribe((data: any) => {
        this.persons = data;
        this.notify2.emit(this.persons);
      });
    });
  }

  markCompleted(id: string | undefined) {
    this.persons.Tasks?.forEach((task: any) => {
      if (task['_id'] == id) {
        task.Completed = true;
      }
    });
    this.sub3 = this.utils
      .updateUser(this.userId, this.persons)
      .subscribe(() => { 
        window.location.reload();
      });
  }

  addTask() {
    this.notify.emit(false);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
  }
}
