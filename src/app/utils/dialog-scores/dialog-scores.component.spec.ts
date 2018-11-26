import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogScoresComponent } from './dialog-scores.component';

describe('DialogScoresComponent', () => {
  let component: DialogScoresComponent;
  let fixture: ComponentFixture<DialogScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogScoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
