import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { OpenAddTaskService } from '../../services/open-add-task.service';
import { TasksService } from '../../services/tasks.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css',
})
export class AllTasksComponent implements OnInit, OnDestroy {
  tasks?: Task[] | any[] = [];
  constructor(
    private taskMenu: OpenAddTaskService,
    private tasksServ: TasksService
  ) {}

  showTaskMenu: boolean = false;

  ChangeAddTaskMenuStatus() {
    this.taskMenu.changeMenuStatus(true);
  }
  compelete(task: Task) {
    task.finished = !task.finished;
    this.tasksServ.completeTask(task);
  }
  deleteTask(id: string, index: any) {
    this.tasksServ.deleteTask(id);
    this.tasks.splice(index, 1);
  }
  showTask(task: Task) {
    this.taskMenu.changeTaskMenuStatus(task);
  }
  editTask(task: Task) {
    this.taskMenu.changeMenuStatus(false, task);
  }
  subj;
  getTasks() {
    this.tasksServ.getTasks();
    this.subj = this.tasksServ.tasksSubj;
    this.tasksServ.tasksSubj.subscribe((data) => {
      this.tasks = data;
      console.log(this.tasks);
    });
  }
  ngOnInit(): void {
    this.getTasks();
  }
  ngOnDestroy(): void {
    this.subj.unsubscribe();
  }
}
