import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrickInfoListComponent } from './trick-info-list.component';

describe('TrickInfoListComponent', () => {
  let component: TrickInfoListComponent;
  let fixture: ComponentFixture<TrickInfoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrickInfoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrickInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
