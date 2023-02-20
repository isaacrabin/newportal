import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { BooleanInput } from "@angular/cdk/coercion";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { SubscriberService } from "app/core/user/subscriber.service";
import { Subscriber } from "app/core/user/subscriber.model";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "user-menu",
  templateUrl: "./user-menu.component.html",
  styleUrls: ["./user-menu.component.scss"],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: "userMenu",
})
export class UserMenuComponent implements OnInit, OnDestroy {
  static ngAcceptInputType_showAvatar: BooleanInput;

  @Input() showAvatar: boolean = true;
  subscriber: Subscriber;

  private _unsubscribeAll: Subject<any> = new Subject<any>();

  /**
   * Constructor
   */
  constructor(private _changeDetectorRef: ChangeDetectorRef, private _router: Router, private _subscriberService: SubscriberService) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    console.log("From User Component1");
    // Subscribe to user changes
    this._subscriberService.subscriber$.pipe(takeUntil(this._unsubscribeAll)).subscribe((subscriber: Subscriber) => {
      this.subscriber = subscriber;

      console.log("From User Component2");
      console.log(subscriber);

      // Mark for check
      this._changeDetectorRef.markForCheck();
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
   * Update the user status
   *
   * @param status
   */
  updateUserStatus(status: string): void {}

  /**
   * Sign out
   */
  signOut(): void {
    this._router.navigate(["/sign-out"]);
  }

  /**
   * Switch Profile
   */
  switchProfile(): void {
    this._router.navigate(["/profiles"]);
  }
}
