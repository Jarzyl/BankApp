import { Component, Inject } from "@angular/core";
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { WarningMessageType } from "../../models/enums/message-types.enum";
import { SnackBarService } from "../../services/snack-bar.service";

@Component({
    selector: "app-warning-message",
    templateUrl: "./warning-message.component.html",
    styleUrls: ["./warning-message.component.scss"],
})
export class WarningMessageComponent {
    public WarningMessageType = WarningMessageType;

    public constructor(
        private snackBarService: SnackBarService,
        @Inject(MAT_SNACK_BAR_DATA)
        public data: { message: string; type: string }
    ) { }

    public getStyleClass(): string { return this.data.type; }

    public getMessage(): string { return this.data.message; }

    private readonly iconMapping: any = {
        [WarningMessageType.FadingSuccess]: "check_circle",
        [WarningMessageType.FadingError]: "error",
        [WarningMessageType.nonFadingError]: "error",
        [WarningMessageType.nonFadingInfo]: "info",
    };

    public getIconType(): string[] { return this.iconMapping[this.data.type] || ""; }

    public showCloseButton(): boolean { return this.data.type === WarningMessageType.nonFadingError; }

    public closeWarning(): void { this.snackBarService.closeSnackBar(); }
}
