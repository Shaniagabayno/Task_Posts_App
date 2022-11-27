import { Persons } from './../persons';
import { Subscription } from 'rxjs';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent implements OnInit {
  @Input()
  userid: string = '';
  @Input()
  persons: Persons = new Persons();
  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  sub: Subscription = new Subscription();

  constructor(private utils: UtilsService) {}

  ngOnInit(): void {}

  navigatePage() {
    this.notify.emit(true);
  }

  addTask(titleVal: string) {
    let newTask = {
      Title: titleVal,
      Completed: false,
    };

    this.persons.Tasks?.push(newTask);
    let obj = this.persons;
    this.sub = this.utils.updateUser(this.userid, obj).subscribe(() => {});
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
