import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FMissionComponent } from './fmission.component';

describe('FMissionComponent', () => {
  let component: FMissionComponent;
  let fixture: ComponentFixture<FMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FMissionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
