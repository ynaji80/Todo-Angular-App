import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task";
import { UiService } from "../../services/ui.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string;
  day: string;
  done: boolean = false;
  @Output() onAddTask : EventEmitter<Task> = new EventEmitter();
  toggleForm: boolean = false ;
  subscription: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.toggleForm = value;
    });
  }

  ngOnInit(): void {
  }
  
  onSubmit() {
    if(!this.text){
      alert("Enter a Task!");
      return;
    }
    const task : Task = {
      text : this.text,
      day : this.day,
      done : this.done
    }

    this.onAddTask.emit(task);

    this.text = "";
    this.day = "";
    this.done = false;
  }
}
