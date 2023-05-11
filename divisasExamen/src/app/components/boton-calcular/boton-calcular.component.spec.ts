import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCalcularComponent } from './boton-calcular.component';

describe('BotonCalcularComponent', () => {
  let component: BotonCalcularComponent;
  let fixture: ComponentFixture<BotonCalcularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCalcularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCalcularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
