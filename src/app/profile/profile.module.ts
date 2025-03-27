import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { ListProfilesComponent } from './list-profiles/list-profiles.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { HomeProfileComponent } from './home-profile/home-profile.component';
import {MatCardModule} from '@angular/material/card'; 
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'; 
import {ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    CreateProfileComponent,
    ListProfilesComponent,
    HomeProfileComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatRadioModule
  ]
})
export class ProfileModule { }
