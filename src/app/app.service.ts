import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userInfo:any;
  constructor() { }

  signUp(infoData): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => {
        this.userInfo={
          displayName:infoData.displayName,
          password:infoData.confirmPassword,
          userName:infoData.userName,
          userId:'12345'

        }})
    );
  }

  login(userCredentials): Observable<boolean> {
    let val =false;
    if(this.userInfo!= null && this.userInfo.password == userCredentials.password && this.userInfo.userName == userCredentials.userName)
    {
      val=true;
    }
    else{
      val=false;

    }
    return of(val);
  }


}
