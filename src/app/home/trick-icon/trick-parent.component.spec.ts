import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickParentComponent } from './trick-parent.component';

describe('TrickParentComponent', () => {
  let component: TrickParentComponent;
  let fixture: ComponentFixture<TrickParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
