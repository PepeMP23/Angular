import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoBonitoComponent } from './texto-bonito.component';

describe('TextoBonitoComponent', () => {
  let component: TextoBonitoComponent;
  let fixture: ComponentFixture<TextoBonitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoBonitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoBonitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
