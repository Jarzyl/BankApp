import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestErrorComponent } from './test-error.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TestErrorComponent', () => {
  let component: TestErrorComponent;
  let fixture: ComponentFixture<TestErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestErrorComponent],
      imports: [HttpClientTestingModule],
    });
    fixture = TestBed.createComponent(TestErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
