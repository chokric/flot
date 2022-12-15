import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceMinesComponent } from './service-mines.component';

describe('ServiceMinesComponent', () => {
  let component: ServiceMinesComponent;
  let fixture: ComponentFixture<ServiceMinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceMinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceMinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
