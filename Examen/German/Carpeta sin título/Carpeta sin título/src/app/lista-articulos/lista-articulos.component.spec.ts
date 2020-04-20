import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArticulosComponent } from './lista-articulos.component';

describe('ListaArticulosComponent', () => {
  let component: ListaArticulosComponent;
  let fixture: ComponentFixture<ListaArticulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaArticulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArticulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
