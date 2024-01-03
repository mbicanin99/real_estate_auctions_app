import { Injectable } from '@angular/core';
import { Roles } from '../utils/enums/roles.enum';
import { AuthService } from '../auth/services/auth.service';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { EMPTY, Observable, catchError, iif, map, of, switchMap } from 'rxjs';
import { UserEntity } from '../utils/types/user.type';
import { selectCurrentUser } from '../auth/login-page/store/reducers/login.reducer';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  roles: Roles[];
  currentUser: UserEntity;

  constructor(private router: Router, private store: Store, private authService: AuthService){

  }

  canActivate(activeRoute: ActivatedRouteSnapshot): Observable<boolean>{
    this.roles = activeRoute.data['canAccess'];

    return this.waitForLoadUser().pipe(
      map((currentUser: UserEntity) => {
          if (!currentUser) {
              console.error('No user found. Redirecting to login.');
              this.unauthorizedRedirect();
              return false;
          }

          const hasRole: boolean = this.roles.some(
              (role: Roles) => role === currentUser.role,
          );

          if (hasRole) {
              console.log('Authorized.');
              return true;
          } else {
              console.error('Not authorized. Redirecting to login.');
              this.unauthorizedRedirect();
              return false;
          }
      }),
      catchError((error) => {
          console.error('Error loading user. Redirecting to login.', error);
          this.unauthorizedRedirect();
          return EMPTY;
      }),
    )
  }

  private waitForLoadUser(): Observable<UserEntity>{
    // return this.store.select(selectCurrentUser).pipe(switchMap((user)=> of(user)));
    return this.store.select(selectCurrentUser).pipe(switchMap((user)=>
    iif(()=>!!user, of(user), this.authService.getCurrentUser())));
  }

  private unauthorizedRedirect(): void{
    this.router.navigate(['login']);
  }

  // canActive(activeRoute: ActivatedRouteSnapshot): boolean{
  //   this.roles=activeRoute.data['canAccess'];

  //   this.currentUser=this.authService.getCurrentUser();
  //   if(!this.currentUser){
  //     console.error('No user found. Redirecting to login.');
  //     this.router.navigate(['/login']);
  //   }
      
  //   const hasRole: boolean = this.roles.some(
  //       (role: Roles) => role === this.currentUser.role,
  //   );

  //   if (hasRole) {
  //       console.log('Authorized.');
  //       return true;
  //   } else {
  //       console.error('Not authorized. Redirecting to login.');
  //       this.router.navigate(['/login']);
  //       return false;
  //   }

  //   }
    
  };

