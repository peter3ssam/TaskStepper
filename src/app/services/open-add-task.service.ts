import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class OpenAddTaskService {
  private showMenu = false;
  private showTaskMenu = false;
  showMenuSubj = new BehaviorSubject(this.showMenu);
  showTaskMenuSubj = new BehaviorSubject(this.showMenu);

  menuData = { title: '' };
  changeMenuStatus(isAddTaskMenu: boolean = true, task = null) {
    this.showMenu = !this.showMenu;
    this.showMenuSubj.next(this.showMenu);
    if (isAddTaskMenu) {
      this.addTaskMenu();
    } else {
      this.editTaskMenu(task);
    }
  }
  currentTask = new BehaviorSubject(null);
  changeTaskMenuStatus(task: any = null) {
    this.showTaskMenu = !this.showTaskMenu;
    this.showTaskMenuSubj.next(this.showTaskMenu);
    this.currentTask.next(task);
  }
  addTaskMenu() {
    this.menuData.title = 'Add Task';
  }
  editTaskMenu(task: any) {
    this.menuData.title = 'Edit Task';
    if (task) {
      this.currentTask.next(task);
      this.currentTask.subscribe((data) => {
      });
    }
  }
  getTaskData(taskData: Task) {
    this.currentTask.next(taskData);
  }
}
