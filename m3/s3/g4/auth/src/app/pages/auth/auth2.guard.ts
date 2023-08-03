import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

export const auth2Guard: CanActivateFn = (route, state) => {

  return inject(AuthService).isLoggedIn$.pipe(map(isLoggedIn => {

    if(!isLoggedIn) {
      inject(Router).navigate(['/auth/login']);
    }
    return isLoggedIn;

  }))

};
