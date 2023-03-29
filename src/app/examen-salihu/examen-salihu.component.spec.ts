import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenSalihuComponent } from './examen-salihu.component';

describe('ExamenSalihuComponent', () => {
  let component: ExamenSalihuComponent;
  let fixture: ComponentFixture<ExamenSalihuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenSalihuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenSalihuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
