import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeProfileComponent } from './profile/home-profile/home-profile.component';

const routes: Routes = [
  {path: '', redirectTo: 'profile/home', pathMatch: 'full'},
  {path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
