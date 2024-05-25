import { Injectable, OnDestroy } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef } from "@angular/material/snack-bar";
import { WarningMessageComponent } from "../components/warning-message/warning-message.component";
import { WarningMessageType } from "../models/enums/message-types.enum";
import { Subscription } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SnackBarService {
    private snackbarRef: MatSnackBarRef<WarningMessageComponent> | any;

    public constructor(private snackBar: MatSnackBar) {}

    public openSnackBar(message: string, type: WarningMessageType): void {
        this.closeSnackBar();
        const config = new MatSnackBarConfig();
        config.verticalPosition = "top";
        config.duration = type === WarningMessageType.nonFadingError || type === WarningMessageType.nonFadingInfo ? 0 : 3000;
        config.data = { message, type };
        this.snackbarRef = this.snackBar.openFromComponent(WarningMessageComponent, config);
    }

    public closeSnackBar(): void { this.snackbarRef?.dismiss(); this.snackbarRef = null; }

}
