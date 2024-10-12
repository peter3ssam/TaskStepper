import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}
  submitTask(form: any) {
    let fullData = { ...form, date: new Date(), finished: false };
    let user: any = localStorage.getItem('user');
    user = JSON.parse(user);
    this.http
      .post(
        'https://taskstepper-default-rtdb.firebaseio.com/tasks.json',
        fullData,
        {
          headers: { auth: user['idToken'] },
        }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  tasksSubj = new BehaviorSubject(null);
  tasks: any[] = [];
  getTasks() {
    this.http
      .get('https://taskstepper-default-rtdb.firebaseio.com/tasks.json')
      .subscribe((data) => {
        for (let task in data) {
          this.tasks.push({ id: task, ...data[task] });
        }
        this.tasksSubj.next(this.tasks);
      });
  }
  deleteTask(id: string) {
    this.http
      .delete(
        'https://taskstepper-default-rtdb.firebaseio.com/tasks/' + id + '.json'
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  completeTask(task: any) {
    this.http
      .put(
        'https://taskstepper-default-rtdb.firebaseio.com/tasks/' +
          task.id +
          '.json',
        { ...task }
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  editTask(id: string, form) {
    this.http
      .put(
        'https://taskstepper-default-rtdb.firebaseio.com/tasks/' + id + '.json',
        form
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
  currentTaskSubj = new BehaviorSubject(null);
  currentTask(task) {
    this.currentTaskSubj.next(task);
  }
}
