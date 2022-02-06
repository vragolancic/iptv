import {User} from "../interfaces/user";
import {EventEmitter} from "@angular/core";

export class Auth {
  private static _user: User;
  static userEmitter = new EventEmitter<User>();

  static set user(user: User) {
    this._user = user;
    this.userEmitter.emit(user);
  }

  static get user(): User {
    return this._user;
  }
}
