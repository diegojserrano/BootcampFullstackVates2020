import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoArticuloComponent } from './listado-articulo.component';

describe('ListadoArticuloComponent', () => {
  let component: ListadoArticuloComponent;
  let fixture: ComponentFixture<ListadoArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
