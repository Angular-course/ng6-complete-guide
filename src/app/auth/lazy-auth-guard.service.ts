import {Injectable} from '@angular/core';
import {CanLoad, Route, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class LazyAuthGuardService implements CanLoad {

    constructor(private authService: AuthService, private router: Router) {
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['/']);
        }
    }
}
