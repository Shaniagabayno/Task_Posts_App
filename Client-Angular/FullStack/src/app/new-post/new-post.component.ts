import { Subscription } from 'rxjs';
import { Persons } from './../persons';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  @Input()
  perId: string = ""
  @Input()
  perData: Persons= new Persons();

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  sub :Subscription =new Subscription()
  constructor(private utils :UtilsService) { }

  ngOnInit(): void {
  }

  navigatePage() {
    this.notify.emit(true)
  }

  addPost(titleVal: string, bodyVal: string)
  {
    let newPost = {Title: titleVal, Body :bodyVal};
    this.perData.Posts?.push(newPost)
    let obj =this.perData
    this.sub=this.utils.updateUser(this.perId, obj ).subscribe(()=>{alert("Created!")})
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
  }


}
