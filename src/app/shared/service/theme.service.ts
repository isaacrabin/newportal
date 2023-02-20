
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";


@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private _viewTheme: BehaviorSubject<boolean | true>;

  constructor() {
    this._viewTheme = new BehaviorSubject(null);
  }

  /**
   * Getter for pagination
   */
  get viewTheme$(): Observable<boolean> {
    return this._viewTheme.asObservable();
  }

  public set showTheme(view: boolean) {
    this._viewTheme.next(view);
  }
}
