import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJobComponent } from './manage-job.component';

describe('JobPostPageComponent', () => {
  let component: ManageJobComponent;
  let fixture: ComponentFixture<ManageJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageJobComponent]
    });
    fixture = TestBed.createComponent(ManageJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
