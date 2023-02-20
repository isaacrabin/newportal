import { Injectable } from "@angular/core";
import { AuthService } from 'app/core/auth/auth.service';
import { AuthUtils } from "app/core/auth/auth.utils";
import { SubscriberService } from "app/core/user/subscriber.service";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class AuthUserDetailsService {
    /**
     * Constructor
     *
     * @param {AuthService} _authService
     * @param {SubscriberService} _subscriberService
     */

    constructor(private _authService: AuthService, private _subscriberService: SubscriberService) {
    }

    getUserDetails(): Observable<any>{
        const decodedToken = AuthUtils._decodeToken(this._authService.accessToken);
        if (decodedToken != null){
            this._subscriberService.subscriber = decodedToken.user;
        }
        return of(decodedToken != null?decodedToken.user:null);
    }

    /*getUserFirstName(): string{
        return this.getUserDetails().first_name;
    }

    getTubiUserProfiles(): Profiles{
        return this.getUserDetails().profiles;
    }*/


  }