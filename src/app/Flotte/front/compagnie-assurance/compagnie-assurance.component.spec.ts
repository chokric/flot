import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompagnieAssuranceComponent } from './compagnie-assurance.component';

describe('CompagnieAssuranceComponent', () => {
  let component: CompagnieAssuranceComponent;
  let fixture: ComponentFixture<CompagnieAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompagnieAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompagnieAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
