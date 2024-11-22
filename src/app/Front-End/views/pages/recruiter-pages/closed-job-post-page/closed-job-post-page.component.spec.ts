import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedJobPostPageComponent } from './closed-job-post-page.component';

describe('ClosedJobPostPageComponent', () => {
  let component: ClosedJobPostPageComponent;
  let fixture: ComponentFixture<ClosedJobPostPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClosedJobPostPageComponent]
    });
    fixture = TestBed.createComponent(ClosedJobPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
