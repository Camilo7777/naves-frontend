import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanzaderaComponent } from './lanzadera.component';

describe('LanzaderaComponent', () => {
  let component: LanzaderaComponent;
  let fixture: ComponentFixture<LanzaderaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LanzaderaComponent]
    });
    fixture = TestBed.createComponent(LanzaderaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
