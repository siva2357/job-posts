import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobPostPageComponent } from './applied-job-post-page.component';

describe('ClosedJobPostPageComponent', () => {
  let component: AppliedJobPostPageComponent;
  let fixture: ComponentFixture<AppliedJobPostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppliedJobPostPageComponent]
    });
    fixture = TestBed.createComponent(AppliedJobPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
