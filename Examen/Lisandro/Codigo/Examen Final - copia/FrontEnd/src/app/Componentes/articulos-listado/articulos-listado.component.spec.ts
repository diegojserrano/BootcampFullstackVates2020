import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosListadoComponent } from './articulos-listado.component';

describe('ArticulosListadoComponent', () => {
  let component: ArticulosListadoComponent;
  let fixture: ComponentFixture<ArticulosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
