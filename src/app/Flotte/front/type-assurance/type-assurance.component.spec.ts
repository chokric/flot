import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAssuranceComponent } from './type-assurance.component';

describe('TypeAssuranceComponent', () => {
  let component: TypeAssuranceComponent;
  let fixture: ComponentFixture<TypeAssuranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAssuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAssuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
