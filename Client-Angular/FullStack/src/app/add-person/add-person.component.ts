import {
  Subscription
} from 'rxjs';
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Persons
} from '../persons';
import {
  UtilsService
} from '../utils.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  sub: Subscription = new Subscription()
  @Output()
  notify: EventEmitter < boolean > = new EventEmitter < boolean > ()
  constructor(private utils: UtilsService, private router: Router) {}

  ngOnInit(): void {

  }

  addUser(nameVal: string, emailVal: string) {
    let obj = {
      Name: nameVal,
      Email: emailVal
    }

    this.sub = this.utils.addUser(obj).subscribe(() => {
      alert("Created!")
    })
  }

  navigatePage() {
    this.router.navigate([""])
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }
}
