import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceHomePageComponent } from './finance-home-page.component';

describe('FinanceHomePageComponent', () => {
  let component: FinanceHomePageComponent;
  let fixture: ComponentFixture<FinanceHomePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinanceHomePageComponent]
    });
    fixture = TestBed.createComponent(FinanceHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
