import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionUniteComponent } from './mission-unite.component';

describe('MissionUniteComponent', () => {
  let component: MissionUniteComponent;
  let fixture: ComponentFixture<MissionUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionUniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
