import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "../app/app.component";
import { HomePageComponent } from "../pages/home-page/home-page.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { LoginPageComponent } from "../components/login-page/login-page.component";
import { LoginFormComponent } from "../components/login-form/login-form.component";
import { RegisterFormComponent } from "../components/register-form/register-form.component";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserPanelComponent } from "../pages/user-panel/user-panel.component";
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { WarningMessageComponent } from "../components/warning-message/warning-message.component";
import { MaterialModule } from "./material.module";
import { TestErrorComponent } from '../components/test-error/test-error.component';
import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { ErrorInterceptor } from "../interceptors/error.interceptor";
import { ServerErrorComponent } from '../pages/server-error/server-error.component';
import { RegisterPageComponent } from '../components/register-page/register-page.component';
import { JwtInterceptor } from "../interceptors/jwt.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    LoginFormComponent,
    RegisterFormComponent,
    UserPanelComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    WarningMessageComponent,
    TestErrorComponent,
    ServerErrorComponent,
    RegisterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
],
  bootstrap: [AppComponent],
})
export class AppModule {}
