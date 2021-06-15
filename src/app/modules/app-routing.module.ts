import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.routing.module').then(m => m.HomeRoutingModule) },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.routing.module').then(m => m.CalendarRoutingModule) },
  { path: 'diary', loadChildren: () => import('./pages/diary/diary.routing.module').then(m => m.DiaryRoutingModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.routing.module').then(m => m.LoginRoutingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
