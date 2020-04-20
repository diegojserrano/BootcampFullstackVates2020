import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasFormComponent } from './compras-form.component';

describe('ComprasFormComponent', () => {
  let component: ComprasFormComponent;
  let fixture: ComponentFixture<ComprasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
