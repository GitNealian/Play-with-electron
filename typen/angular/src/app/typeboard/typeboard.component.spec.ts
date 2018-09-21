import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeboardComponent } from './typeboard.component';

describe('TypeboardComponent', () => {
  let component: TypeboardComponent;
  let fixture: ComponentFixture<TypeboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
