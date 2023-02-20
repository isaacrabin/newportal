import { Injectable } from "@angular/core";
import { cloneDeep } from "lodash-es";
import { TreoNavigationItem } from "@treo/components/navigation";
import { TreoMockApiService } from "@treo/lib/mock-api";
import {
  compactNavigation,
  defaultNavigation,
  futuristicNavigation,
  horizontalNavigation,
  tubiAdminNavigation,
  countyAdminNavigation,
  bankAdminNavigation,
} from "app/mock-api/common/navigation/data";

@Injectable({
  providedIn: "root",
})
export class NavigationMockApi {
  private readonly _compactNavigation: TreoNavigationItem[] = compactNavigation;
  private readonly _defaultNavigation: TreoNavigationItem[] = defaultNavigation;
  private readonly _futuristicNavigation: TreoNavigationItem[] = futuristicNavigation;
  private readonly _horizontalNavigation: TreoNavigationItem[] = horizontalNavigation;
  private readonly _tubiAdminNavigation: TreoNavigationItem[] = tubiAdminNavigation;
  private readonly _countyAdminNavigation: TreoNavigationItem[] = countyAdminNavigation;
  private readonly _bankAdminNavigation: TreoNavigationItem[] = bankAdminNavigation;

  /**
   * Constructor
   */
  constructor(private _treoMockApiService: TreoMockApiService) {
    // Register Mock API handlers
    this.registerHandlers();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Register Mock API handlers
   */
  registerHandlers(): void {
    // -----------------------------------------------------------------------------------------------------
    // @ Navigation - GET
    // -----------------------------------------------------------------------------------------------------
    this._treoMockApiService.onGet("api/common/navigation").reply(() => {
      // Fill compact navigation children using the default navigation
      this._compactNavigation.forEach((compactNavItem) => {
        this._defaultNavigation.forEach((defaultNavItem) => {
          if (defaultNavItem.id === compactNavItem.id) {
            compactNavItem.children = cloneDeep(defaultNavItem.children);
          }
        });
      });

      // Fill futuristic navigation children using the default navigation
      this._futuristicNavigation.forEach((futuristicNavItem) => {
        this._defaultNavigation.forEach((defaultNavItem) => {
          if (defaultNavItem.id === futuristicNavItem.id) {
            futuristicNavItem.children = cloneDeep(defaultNavItem.children);
          }
        });
      });

      // Fill horizontal navigation children using the default navigation
      this._horizontalNavigation.forEach((horizontalNavItem) => {
        this._defaultNavigation.forEach((defaultNavItem) => {
          if (defaultNavItem.id === horizontalNavItem.id) {
            horizontalNavItem.children = cloneDeep(defaultNavItem.children);
          }
        });
      });

      // Return the response
      return [
        200,
        {
          compact: cloneDeep(this._compactNavigation),
          default: cloneDeep(this._defaultNavigation),
          futuristic: cloneDeep(this._futuristicNavigation),
          horizontal: cloneDeep(this._horizontalNavigation),
          tubi_admin: cloneDeep(this._tubiAdminNavigation),
          county: cloneDeep(this._countyAdminNavigation),
          bank_admin: cloneDeep(this._bankAdminNavigation)
        },
      ];
    });
  }
}
