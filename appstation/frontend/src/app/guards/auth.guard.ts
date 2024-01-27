import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { inject } from '@angular/core';
import { SnackBarService } from '../services/snack-bar.service';
import { WarningMessageType } from '../models/enums/message-types.enum';
import { map } from 'rxjs';

export const AuthGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const snackBarService = inject(SnackBarService);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        snackBarService.openSnackBar("You shall not pass!!", WarningMessageType.FadingError);
        return false;
      }
    })  
  )
};
