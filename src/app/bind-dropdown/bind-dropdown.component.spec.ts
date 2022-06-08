import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindDropdownComponent } from './bind-dropdown.component';

describe('BindDropdownComponent', () => {
  let component: BindDropdownComponent;
  let fixture: ComponentFixture<BindDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
