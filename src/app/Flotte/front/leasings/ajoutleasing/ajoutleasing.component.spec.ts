import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutleasingComponent } from './ajoutleasing.component';

describe('AjoutleasingComponent', () => {
  let component: AjoutleasingComponent;
  let fixture: ComponentFixture<AjoutleasingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutleasingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutleasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
