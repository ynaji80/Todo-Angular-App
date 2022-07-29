import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  @Output() deleteTask : EventEmitter<Task> = new EventEmitter();
  @Output() toggleDone : EventEmitter<Task> = new EventEmitter();
  faTimes= faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(task: Task) {
    this.deleteTask.emit(task);  
  }
  onToggle(task: Task){
    this.toggleDone.emit(task);
  }

}
