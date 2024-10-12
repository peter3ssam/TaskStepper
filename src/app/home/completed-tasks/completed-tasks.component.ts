import { Component, ElementRef } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { OpenAddTaskService } from '../../services/open-add-task.service';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css',
})
export class CompletedTasksComponent {
  tasks?: Task[] = [
    new Task('task5', 'simple task', ['finish'], new Date(), true),
    new Task('task5', 'simple task', ['finish'], new Date(), true),
  ];
  constructor(private taskMenu: OpenAddTaskService) {}
  showTaskMenu: boolean = false;

  ChangetaskMenuStatus() {
    this.taskMenu.changeMenuStatus(true);
  }
  showTask(task: Task) {
    this.taskMenu.changeTaskMenuStatus()
  }
}
