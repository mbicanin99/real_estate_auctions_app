import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { UserEntity } from '../../utils/types/user.type';
import { Roles } from '../../utils/enums/roles.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // private registeredUsers: UserEntity[] = [
  // { id: 1, firstName:"Milica", lastName:"Bicanin", email:"admin@gmail.com", password:"mb", role: Roles.ADMIN},
  // { id: 2, firstName:"Milica", lastName:"Bicanin", email:"korisnik@gmail.com", password:"mb", role: Roles.USER}]; //users list


  private currentUser: UserEntity|null = null; //currently logged user
  private userId: number=2;

  loginUser(email: string, password: string): Observable<UserEntity>{
    console.log("Email", email, "Password", password)
    const allUsers = this.getAllUsers();
    console.log(allUsers)
    const existingUser: UserEntity | undefined = allUsers.find((user) => user.email === email && user.password === password);

    if (existingUser) {
      this.currentUser = existingUser;
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      this.router.navigate(['/home'])
      console.log("Current user u servisu offf",of(this.currentUser))
      return of(this.currentUser);
    } else {
      console.error('User with this password and email is not found!');
      return throwError('User not found');
    }
}

registerUser(firstName: string, lastName: string, email: string, password: string, role: Roles) {
    console.log("Usao sam u register servis u user", firstName, lastName, email, password, role)
    const adminsString: string | null = localStorage.getItem('admins');
    let admins: UserEntity[] = adminsString ? JSON.parse(adminsString) : [];
    const registerString: string | null= localStorage.getItem('registeredUsers');
    let registeredUsersInApp: UserEntity[]= registerString ? JSON.parse(registerString) : [];
    const allUsers = [...admins, ...registeredUsersInApp];
    console.log(allUsers)
    while (allUsers.some(user => user.id == this.userId)) {
      this.userId++;
    }

    const newUser = { id: this.userId, firstName, lastName, email, password, role };

    if (newUser) {
      registeredUsersInApp.push(newUser);
      localStorage.setItem('registeredUsers', JSON.stringify(registeredUsersInApp));
      this.router.navigate(['/login'])
      let allUsers=[...admins,...registeredUsersInApp]
      return of(allUsers);
    } else {
      console.error('User with this password and email is not found!');
      return throwError('User not found');
    }
}

getAllUsers(): UserEntity[]{
  const adminsString: string | null = localStorage.getItem('admins');
  let admins: UserEntity[] = adminsString ? JSON.parse(adminsString) : [];
  const registerString: string | null= localStorage.getItem('registeredUsers');
  let registeredUsersInApp: UserEntity[]= registerString ? JSON.parse(registerString) : [];
  const allUsers = [...admins, ...registeredUsersInApp];
  return allUsers;
}

getCurrentUser(): Observable<UserEntity>{
  const userString: string | null = localStorage.getItem('user');
  let user: UserEntity|null = userString ? JSON.parse(userString) : [];
  return of(user)
}

  
}

