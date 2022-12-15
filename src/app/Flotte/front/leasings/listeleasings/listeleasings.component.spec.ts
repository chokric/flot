import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeleasingsComponent } from './listeleasings.component';

describe('ListeleasingsComponent', () => {
  let component: ListeleasingsComponent;
  let fixture: ComponentFixture<ListeleasingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeleasingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeleasingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
