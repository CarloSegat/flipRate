import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickInfoComponent } from './trick-info.component';

describe('TrickInfoComponent', () => {
  let component: TrickInfoComponent;
  let fixture: ComponentFixture<TrickInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
