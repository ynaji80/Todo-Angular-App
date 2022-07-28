import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from "../Task";
import { tasks } from "../todos";
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
     const TASKS = of(tasks);
     return TASKS;
  } 
}
