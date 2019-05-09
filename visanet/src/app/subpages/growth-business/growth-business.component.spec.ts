import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthBusinessComponent } from './growth-business.component';

describe('GrowthBusinessComponent', () => {
  let component: GrowthBusinessComponent;
  let fixture: ComponentFixture<GrowthBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowthBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowthBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
