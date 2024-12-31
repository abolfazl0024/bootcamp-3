import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoappService } from '../todoapp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [FormsModule,ReactiveFormsModule,CommonModule,],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
currentdate:any;
constructor(private todo:TodoappService){
this.currentdate=new Date().toLocaleDateString('fa-IR');
}
 task:FormGroup=new FormGroup({
  task:new FormControl('',[Validators.required]),
  description:new FormControl(''),
  priority:new FormControl('',[Validators.required]),
  // date: new FormControl(new Date().toLocaleDateString('fa-IR'))
})
 submittask(){
const taskdetail={
  task:this.task.value.task,
  description:this.task.value.description,
  priority:this.task.value.priority,
  date:this.currentdate,
  iscomplate:false,
}
this.todo.addtask(taskdetail);
this.task.reset();
 }


}
