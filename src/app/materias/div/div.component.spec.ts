import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivComponent } from './div.component';

describe('DivComponent', () => {
  let component: DivComponent;
  let fixture: ComponentFixture<DivComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DivComponent]
    });
    fixture = TestBed.createComponent(DivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
