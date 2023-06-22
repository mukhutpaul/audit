import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionUniteComponent } from './gestion-unite.component';

describe('GestionUniteComponent', () => {
  let component: GestionUniteComponent;
  let fixture: ComponentFixture<GestionUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionUniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
