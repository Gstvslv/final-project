import { Component } from '@angular/core';

export interface Profile {
  name: string;
  email: string;
  phone: string;
}

const profiles: Profile[] = [
  {name: "Gustavo de Oliveira Silva", email: "Gustavo@gmail.com", phone: "123456789"},
  {name: "Leticia de Oliveira Silva", email: "Leticia@gmail.com", phone: "213124901"},
  {name: "Lidia Aparecida de Oliveira Silva", email: "Lidia@gmail.com", phone: "378912831"},
  {name: "Valdeci Coelho da Silva", email: "Valdeci@gmail.com", phone: "381283719"},
];

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.css'
})
export class ListProfilesComponent {
  displayedColumns: string[] = ['name', 'email', 'phone'];
  dataSource = profiles;
}
