import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignaReporteComponent } from './consigna-reporte.component';

describe('ConsignaReporteComponent', () => {
  let component: ConsignaReporteComponent;
  let fixture: ComponentFixture<ConsignaReporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignaReporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignaReporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
