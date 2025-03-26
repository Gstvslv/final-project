import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';


@NgModule({
  declarations: [
    CreateProfileComponent,
    ListProfilesComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
