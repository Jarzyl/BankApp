import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { AuthGuard } from './guards/auth.guard';
import { TestErrorComponent } from './components/test-error/test-error.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'errors', component: TestErrorComponent},
  // {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'data', component: UserPanelComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
//   {path: '',
//     runGuardsAndResolvers: 'always',
//     canActivate: [AuthGuard],
//     children: [
//       {path: 'data', component: UserPanelComponent},
//       {path: 'dashboard', component: DashboardComponent},
//       { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
//     ]
// },
  {path: '**', component: HomePageComponent, pathMatch: 'full'},
  // {path: 'data/:id', component: UserPanelComponent}, // dla danego usera?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
