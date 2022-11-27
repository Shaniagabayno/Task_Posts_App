import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Persons } from '../persons';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  @Input()
  userId: string = '';
  @Input()
  personData: Persons = new Persons();
  divStyle: string = '';
 
  showDiv: boolean = false;
  isTasksCompleted: boolean = false;

  sub: Subscription = new Subscription();
  sub2: Subscription = new Subscription();

  constructor(private utils: UtilsService ,private router :Router) {}

  ngOnInit(): void {
    this.personData.Tasks?.forEach((task: any) => {
      this.isTasksCompleted = task.Completed;
      if (this.personData.Tasks?.some((item: any) => item.Completed == false)) {
        this.isTasksCompleted = false;
      }
    });
  }

  updateUser() {
    let obj = this.personData;
    this.sub = this.utils.updateUser(this.userId, obj).subscribe(() => {});
  }

  deleteUser(id: string) {
    this.userId = id;
    this.sub2 = this.utils.deleteUser(this.userId).subscribe(() => {});
  }

  NavigatePage() {
      this.divStyle = 'div-change';
      this.router.navigate(['/todosAndPosts' ,this.userId])
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }
}
