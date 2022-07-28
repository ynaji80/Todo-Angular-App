import { Component, OnInit,Input } from '@angular/core';
import { Task } from "../../Task";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task:Task;
  faTimes= faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
