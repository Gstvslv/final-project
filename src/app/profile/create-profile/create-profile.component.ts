import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Profile {
  name: string;
  email: string;
  phone: string;
  category: string;
  gender: string;
}

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  category: string = '';
  gender: string = '';
  formSubmitted: boolean = false;

  constructor(private snackBar: MatSnackBar) {}

  saveProfile() {
    this.formSubmitted = true;

    if (!this.name || !this.email || !this.phone || !this.category || !this.gender) {
      return;
    }

    console.log("Profile Data:", {
      name: this.name,
      email: this.email,
      phone: this.phone,
      category: this.category,
      gender: this.gender
    });

    this.snackBar.open('Profile saved successfully!', 'Close', {
      duration: 3000,
      panelClass: ['success-snackbar']
    });

    // Resetar o formulário após o sucesso
    this.name = '';
    this.email = '';
    this.phone = '';
    this.category = '';
    this.gender = '';
    this.formSubmitted = false;
  }
}