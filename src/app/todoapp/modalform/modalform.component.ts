import { Component } from '@angular/core';
import { TodoappService } from '../todoapp.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modalform',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './modalform.component.html',
  styleUrl: './modalform.component.css'
})
export class ModalformComponent {
constructor(private todo:TodoappService){
this.todo.sendindex.subscribe((x)=>this.index=x)

}


// edittask(index:number,item:any){
//   this.todo.edittasklist(index,item);
// }
taskedit:FormGroup=new FormGroup({
  task:new FormControl('',[Validators.required]),
  priority:new FormControl('',[Validators.required]),
  description:new FormControl('',[Validators.required]),
})
index:any;
submittask(){
  const taskdetail={
    task:this.taskedit.value.task,
    description:this.taskedit.value.description,
    priority:this.taskedit.value.priority,
   
  }
  this.todo.edittasklist( this.index,taskdetail);
  this.taskedit.reset();
   }

}
