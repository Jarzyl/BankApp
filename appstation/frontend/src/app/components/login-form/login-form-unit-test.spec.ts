import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { LoginFormComponent } from './login-form.component';
import { AccountService } from 'src/app/services/account.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let mockAccountService: { logIn: { and: { returnValue: (arg0: Observable<boolean>) => void; }; }; };
  let mockRouter: { navigateByUrl: any; };
  let mockSnackBarService: { openSnackBar: any; };

  beforeEach(() => {
    mockAccountService = jasmine.createSpyObj(['logIn']);
    mockRouter = jasmine.createSpyObj(['navigateByUrl']);
    mockSnackBarService = jasmine.createSpyObj(['openSnackBar']);

    TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: AccountService, useValue: mockAccountService },
        { provide: Router, useValue: mockRouter },
        { provide: SnackBarService, useValue: mockSnackBarService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show error if username or password is empty on login', () => {
    component.model.username = '';
    component.model.password = '';
    component.login();
    expect(mockAccountService.logIn).not.toHaveBeenCalled();
  });

  it('should call login method of accountService when login is called', () => {
    component.model.username = 'testuser';
    component.model.password = 'testpassword';
    mockAccountService.logIn.and.returnValue(of(true));
    component.login();
    expect(mockAccountService.logIn).toHaveBeenCalledWith(component.model);
  });

  it('should navigate to dashboard and show success snackBar on successful login', () => {
    component.model.username = 'testuser';
    component.model.password = 'testpassword';
    mockAccountService.logIn.and.returnValue(of(true));
    component.login();
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('dashboard');
    expect(mockSnackBarService.openSnackBar).toHaveBeenCalledWith('You logged successfully!', 'FadingSuccess');
  });

  // it('should show error snackBar on failed login', () => {
  //   component.model.username = 'testuser';
  //   component.model.password = 'testpassword';
  //   const errorResponse = { error: 'Invalid credentials' };
  //   mockAccountService.logIn.and.returnValue(throwError(errorResponse));
  //   component.login();
  //   expect(mockSnackBarService.openSnackBar).toHaveBeenCalledWith('Invalid credentials', 'FadingError');
  // });
});
