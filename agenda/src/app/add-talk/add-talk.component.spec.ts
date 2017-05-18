import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTalkComponent } from './add-talk.component';

describe('AddTalkComponent', () => {
  let component: AddTalkComponent;
  let fixture: ComponentFixture<AddTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
