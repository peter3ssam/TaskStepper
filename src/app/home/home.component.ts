import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';
import { AddUpdateTaskComponent } from '../dynamicComponents/add-update-task/add-update-task.component';
import { OpenAddTaskService } from '../services/open-add-task.service';
import { TaskMenuComponent } from '../dynamicComponents/task-menu/task-menu.component';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  standalone: true,
  providers: [OpenAddTaskService,TasksService],
  imports: [
    TaskMenuComponent,
    SideBarComponent,
    AllTasksComponent,
    CompletedTasksComponent,
    RouterOutlet,
    AddUpdateTaskComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private taskMenu: OpenAddTaskService) {}

  showAddTaskMenu: boolean = false;
  showTaskMenu: boolean = true;
  ngOnInit(): void {
    this.taskMenu.showMenuSubj.subscribe((data) => {
      this.showAddTaskMenu = data;
    });
    this.taskMenu.showTaskMenuSubj.subscribe((data) => {
      this.showTaskMenu = data;
      console.log(data);
    });
  }
}
