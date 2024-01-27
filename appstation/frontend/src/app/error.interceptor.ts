import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';
import { SnackBarService } from './services/snack-bar.service';
import { WarningMessageType } from './models/enums/message-types.enum';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private snackBarService: SnackBarService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => {
        if (error) {
          switch (error.status) {
            case 400:
              if (error.error.errors) {
                const modelStateErrors = [];
                for (const key in error.error.errors) {
                  if (error.error.errors[key]) {
                    modelStateErrors.push(error.error.errors[key])
                  }
                }
                throw modelStateErrors.flat();
              } else {
                this.snackBarService.openSnackBar(error.error, WarningMessageType.FadingError);
              }
              break;
            case 401:
              this.snackBarService.openSnackBar(error.status, WarningMessageType.FadingError);
              break;
            case 404: 
              this.router.navigateByUrl('/not-found');
              this.snackBarService.openSnackBar(error.error, WarningMessageType.FadingError);
              break;
            case 500:
              const navigationExtras: NavigationExtras = {state: {error: error.error}};
              this.router.navigateByUrl('/server-error', navigationExtras);
              this.snackBarService.openSnackBar(error.error, WarningMessageType.FadingError);
              break;
            default:
              this.snackBarService.openSnackBar('Something unexpected went wrong', WarningMessageType.FadingError);
              console.log(error);
              break;
          }
        }
        throw error;
      })
    )
  }
}
