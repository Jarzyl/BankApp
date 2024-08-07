import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { MatProgressBarModule } from "@angular/material/progress-bar";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [HttpClientTestingModule, MatProgressBarModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
