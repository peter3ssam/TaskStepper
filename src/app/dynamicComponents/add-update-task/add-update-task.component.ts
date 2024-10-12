import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';
import { OpenAddTaskService } from '../../services/open-add-task.service';
import { Task } from '../../models/task.model';
import { HttpClient } from '@angular/common/http';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-update-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-update-task.component.html',
  styleUrl: './add-update-task.component.css',
})
export class AddUpdateTaskComponent implements AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private serv: OpenAddTaskService,
    private http: HttpClient,
    private taskServ: TasksService,
    private router: Router
  ) {}
  isAddMenu: boolean | null = null;
  ngAfterViewInit(): void {
    this.serv.currentTask.subscribe((data) => {
      if (data) {
        this.currenTask = data;
        this.task.controls.title.setValue(this.currenTask.title);
        this.task.controls.decription.setValue(this.currenTask.decription);
        this.fillStepsArray();
      }
    });
  }

  currenTask: any = new Task('', '', [''], new Date());
  task = this.fb.group({
    title: [this.currenTask.title, [Validators.required]],
    decription: [this.currenTask.decription, [Validators.maxLength(20)]],
    steps: this.fb.array([]),
  });
  get steps(): FormArray {
    return this.task.controls.steps;
  }
  fillStepsArray() {
    if (this.currenTask.steps) {
      for (let i = 0; i < this.currenTask.steps.length; i++) {
        this.addStep(this.currenTask.steps[i]);
      }
    }
  }
  addStep(stepName = '') {
    if (this.steps.controls.length === 10) return;
    this.steps.push(this.fb.control(stepName));
  }
  submit(form: any) {
    if (this.menuData.title === 'Add Task') {
      this.taskServ.submitTask(form);
    } else {
      this.taskServ.editTask(this.currenTask.id, {
        ...form,
        finish: this.currenTask.finish,
        date: new Date(),
      });
    }
  }
  close() {
    this.serv.changeMenuStatus(true);
    this.serv.currentTask.next(new Task('', '', [''], new Date()));
    this.isAddMenu = null;
    history.go(0);
  }
  menuData = this.serv.menuData;
}
