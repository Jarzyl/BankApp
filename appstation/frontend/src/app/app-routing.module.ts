import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FinanceHomePageComponent } from './pages/finance-home-page/finance-home-page.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'finance', component: FinanceHomePageComponent},
  {path: 'data', component: UserPanelComponent},
  {path: '**', component: HomePageComponent, pathMatch: 'full'},
  // {path: 'data/:id', component: UserPanelComponent}, // dla danego usera?
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
