import { Injectable } from '@angular/core';
import { User } from '../login/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }
  loggedIn = false;

  login(user:User):boolean{
    if(user.userName =="selim" && user.password=="12345"){
      this.loggedIn = true;
      localStorage.setItem("isLogger",user.userName)
      return true;
    }

    return false;
  }

  IsLoggedIn(){
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem("isLogged")
    this.loggedIn =false
  }
}
