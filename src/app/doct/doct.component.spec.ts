import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctComponent } from './doct.component';

describe('DoctComponent', () => {
  let component: DoctComponent;
  let fixture: ComponentFixture<DoctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
