import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripuladaComponent } from './tripulada.component';

describe('TripuladaComponent', () => {
  let component: TripuladaComponent;
  let fixture: ComponentFixture<TripuladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TripuladaComponent]
    });
    fixture = TestBed.createComponent(TripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
