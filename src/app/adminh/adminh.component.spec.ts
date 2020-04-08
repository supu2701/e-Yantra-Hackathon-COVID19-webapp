import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminhComponent } from './adminh.component';

describe('AdminhComponent', () => {
  let component: AdminhComponent;
  let fixture: ComponentFixture<AdminhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
