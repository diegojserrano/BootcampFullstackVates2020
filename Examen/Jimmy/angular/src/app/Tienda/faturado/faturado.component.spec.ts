import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturadoComponent } from './faturado.component';

describe('FaturadoComponent', () => {
  let component: FaturadoComponent;
  let fixture: ComponentFixture<FaturadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaturadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
