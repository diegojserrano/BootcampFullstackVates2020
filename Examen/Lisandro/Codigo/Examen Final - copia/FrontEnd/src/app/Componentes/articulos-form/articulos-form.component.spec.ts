import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticulosFormComponent } from './articulos-form.component';

describe('ArticulosFormComponent', () => {
  let component: ArticulosFormComponent;
  let fixture: ComponentFixture<ArticulosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticulosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticulosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
