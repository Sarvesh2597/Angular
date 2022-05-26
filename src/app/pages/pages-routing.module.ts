import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ArtificialComponent } from './artificial/artificial.component';
import { FormulasComponent } from './formulas/formulas.component';
import { UserComponent } from './user/user.component';
import { ReportComponent } from './report/report.component';



const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) },
  { path: 'alerts', component: AlertsComponent},
  {path: 'artificial', component: ArtificialComponent},
  {path: 'formulas', component: FormulasComponent},
  {path: 'user', component: UserComponent},
  {path: 'report', component: ReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
