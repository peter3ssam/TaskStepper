import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { OpenAddTaskService } from '../../services/open-add-task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-menu.component.html',
  styleUrl: './task-menu.component.css',
})
export class TaskMenuComponent implements OnInit {
  constructor(private serv: OpenAddTaskService,private router:Router) {}
  ngOnInit(): void {
    this.serv.currentTask.subscribe((data) => {
      this.task = data;
    });
  }
  task: any;

  close() {
    this.serv.changeTaskMenuStatus();

  }
}
