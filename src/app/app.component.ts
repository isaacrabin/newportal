import { Component } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { LoadingIndicatorService } from "./shared/service/loading-indicator-service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public showOverlay = true;

  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.matIconRegistry.addSvgIcon(
      `heroicons-outline`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/heroicons-outline.svg`)
    );
    this.matIconRegistry.addSvgIcon(`mat_outline`, this.domSanitizer.bypassSecurityTrustResourceUrl(`../../../../assets/icons/material-outline.svg`));

    this.matIconRegistry.addSvgIconSet(this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/material-twotone.svg"));

    this.matIconRegistry.addSvgIconSetInNamespace(
      "iconsmind",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/iconsmind.svg")
    );
    this.matIconRegistry.addSvgIconSetInNamespace(
      "feather",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/feather.svg")
    );
    this.matIconRegistry.addSvgIconSetInNamespace(
      "heroicons_solid",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../../assets/icons/heroicons-solid.svg")
    );
  }
}
