import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaCompraComponent } from './nueva-compra.component';

describe('NuevaCompraComponent', () => {
  let component: NuevaCompraComponent;
  let fixture: ComponentFixture<NuevaCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
