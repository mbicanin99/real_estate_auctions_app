
import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { UserEntity } from "./utils/types/user.type";
import { Roles } from "./utils/enums/roles.enum";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
   title = 'real_estate_auctions_app';
   private admins: UserEntity[] = [
    { id: 1, firstName:"Milica", lastName:"Bicanin", email:"admin@gmail.com", password:"mb", role: Roles.ADMIN},
    { id: 2, firstName:"Milica", lastName:"Bicanin", email:"korisnik@gmail.com", password:"mb", role: Roles.ADMIN}
  ]; //users list

   constructor(private store: Store){
  }

  ngOnInit(): void {
    console.log("Ponovo sa usao nu app.component.ts", localStorage.getItem('admins'))
    if(!localStorage.getItem('admins')){
    localStorage.setItem('admins', JSON.stringify(this.admins));
    }
  }
}