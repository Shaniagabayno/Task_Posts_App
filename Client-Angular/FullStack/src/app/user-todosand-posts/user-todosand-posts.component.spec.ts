import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodosandPostsComponent } from './user-todosand-posts.component';

describe('UserTodosandPostsComponent', () => {
  let component: UserTodosandPostsComponent;
  let fixture: ComponentFixture<UserTodosandPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTodosandPostsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTodosandPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
