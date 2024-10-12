import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Form, FormsModule, NgForm, ValidationErrors } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  providers: [],
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUPComponent {
  constructor(private auth: AuthService) {}
  submit(form: any) {
    this.auth.signup(form);
  }
}
