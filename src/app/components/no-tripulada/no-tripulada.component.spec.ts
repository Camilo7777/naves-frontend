import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTripuladaComponent } from './no-tripulada.component';

describe('NoTripuladaComponent', () => {
  let component: NoTripuladaComponent;
  let fixture: ComponentFixture<NoTripuladaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoTripuladaComponent]
    });
    fixture = TestBed.createComponent(NoTripuladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
