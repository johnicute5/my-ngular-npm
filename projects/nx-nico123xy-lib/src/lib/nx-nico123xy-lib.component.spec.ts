import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NxNico123xyLibComponent } from './nx-nico123xy-lib.component';

describe('NxNico123xyLibComponent', () => {
  let component: NxNico123xyLibComponent;
  let fixture: ComponentFixture<NxNico123xyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NxNico123xyLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NxNico123xyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
