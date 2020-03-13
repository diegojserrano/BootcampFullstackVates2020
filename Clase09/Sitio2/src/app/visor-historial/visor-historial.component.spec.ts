import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorHistorialComponent } from './visor-historial.component';

describe('VisorHistorialComponent', () => {
  let component: VisorHistorialComponent;
  let fixture: ComponentFixture<VisorHistorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisorHistorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisorHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
