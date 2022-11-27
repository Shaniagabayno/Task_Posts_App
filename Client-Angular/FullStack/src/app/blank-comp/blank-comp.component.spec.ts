import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankCompComponent } from './blank-comp.component';

describe('BlankCompComponent', () => {
  let component: BlankCompComponent;
  let fixture: ComponentFixture<BlankCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
