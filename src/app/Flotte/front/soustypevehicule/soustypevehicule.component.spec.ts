import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoustypevehiculeComponent } from './soustypevehicule.component';

describe('SoustypevehiculeComponent', () => {
  let component: SoustypevehiculeComponent;
  let fixture: ComponentFixture<SoustypevehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoustypevehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoustypevehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
