import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FUniteComponent } from './funite.component';

describe('FUniteComponent', () => {
  let component: FUniteComponent;
  let fixture: ComponentFixture<FUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FUniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
