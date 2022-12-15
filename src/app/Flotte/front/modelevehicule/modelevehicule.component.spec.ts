import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelevehiculeComponent } from './modelevehicule.component';

describe('ModelevehiculeComponent', () => {
  let component: ModelevehiculeComponent;
  let fixture: ComponentFixture<ModelevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
