import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileoffComponent } from './profileoff.component';

describe('ProfileoffComponent', () => {
  let component: ProfileoffComponent;
  let fixture: ComponentFixture<ProfileoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
