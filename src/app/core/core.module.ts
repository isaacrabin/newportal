import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AuthService } from 'app/core/auth/auth.service';
import { TokenInterceptorService } from '../../_services/token-interceptor.service';
import { AuthGuardGuard } from '_services/auth-guard.guard';
import { OnlyLoggedInUsersGuard } from '_services/onlyloggedInusersGuard.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { EncrdecrService } from '_services/encrdecr.service';

@NgModule({
    imports  : [
        HttpClientModule
    ],
    providers: [  
        AuthGuardGuard,
        OnlyLoggedInUsersGuard,
        AuthService,
        EncrdecrService,
        {
            provide : HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi   : true
        },
        {
            provide: LocationStrategy,
            useClass:HashLocationStrategy,
      
        },
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        private _domSanitizer: DomSanitizer,
        private _matIconRegistry: MatIconRegistry,
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }

        // Register icon sets
        this._matIconRegistry.addSvgIconSet(this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-twotone.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('mat_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/material-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('iconsmind', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconsmind.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('feather', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/feather.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_outline', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-outline.svg'));
        this._matIconRegistry.addSvgIconSetInNamespace('heroicons_solid', this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/heroicons-solid.svg'));
    }
}
