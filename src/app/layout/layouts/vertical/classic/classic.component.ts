import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Data, Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TreoMediaWatcherService } from "@treo/services/media-watcher";
import { TreoNavigationService } from "@treo/components/navigation";
import { InitialData } from "app/app.types";
import { ToastrService } from "ngx-toastr";


@Component({
  selector: "classic-layout",
  templateUrl: "./classic.component.html",
  styleUrls: ["./classic.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ClassicLayoutComponent implements OnInit, OnDestroy {
  data: InitialData;
  tenantName$: any;
  navigator: any;
  isScreenSmall: boolean;
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(
    private _activatedRoute: ActivatedRoute,
    private router: Router,
    private _treoMediaWatcherService: TreoMediaWatcherService,
    private _treoNavigationService: TreoNavigationService,
    private toastr : ToastrService
  
  ) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  /**
   * Getter for current year
   */
  get currentYear(): number {
    return new Date().getFullYear();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to the resolved route mock-api
    this._activatedRoute.data.subscribe((data: Data) => {
      this.data = data.initialData;
      console.log(this.data);
      
    });

    this.navigator = this.data.navigation[this._activatedRoute.routeConfig.data.navigator];
    console.log("Navigator!!!!!!!!!!!!!!!!!!!!!!!!!1");
    console.log(this.navigator);

    // Subscribe to media changes
    this._treoMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      // Check if the screen is small
      this.isScreenSmall = !matchingAliases.includes("md");
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle navigation
   *
   * @param name
   */
  toggleNavigation(name: string): void {
    // Get the navigation
    const navigation = this._treoNavigationService.getComponent(name);

    if (navigation) {
      // Toggle the opened status
      navigation.toggle();
    }
  }
  logout(){
      sessionStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['/sign-in'])
      this.toastr.success('Admin logged out  successfully');
  }
}
