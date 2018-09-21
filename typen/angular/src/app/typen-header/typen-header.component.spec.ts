import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypenHeaderComponent } from './typen-header.component';

describe('TypenHeaderComponent', () => {
  let component: TypenHeaderComponent;
  let fixture: ComponentFixture<TypenHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypenHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
