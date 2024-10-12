import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  constructor(private router: Router, private auth: AuthService) {}

  navAllTasks() {
    this.router.navigate(['alltasks']);
  }
  navCompTasks() {
    this.router.navigate(['completedtasks']);
  }
  signOut() {
    this.auth.logOut();
  }
}
