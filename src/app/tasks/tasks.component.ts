import { Component,Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports:[TaskComponent,
    NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  isAddingTask:boolean=false;
  constructor(private taskService:TasksService) { }
  
  get SelectedUserTasks(){
   return this.taskService.getUserTasks(this.userId);
  }
  
  onStartAddTask(){
    this.isAddingTask = true;

  }
  onCloseAddingTask(){
    this.isAddingTask = false;
  }
  


}
