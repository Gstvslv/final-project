import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import { HomeProfileComponent } from './home-profile/home-profile.component';

const routes: Routes = [
  {path: 'home', component: HomeProfileComponent},
  {path: 'create-profile', component: CreateProfileComponent},
  {path: 'list-profiles', component: ListProfilesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
