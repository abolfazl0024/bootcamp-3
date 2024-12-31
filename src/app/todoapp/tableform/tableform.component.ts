import { Component } from '@angular/core';
import { TodoappService } from '../todoapp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tableform',
  imports: [CommonModule],
  templateUrl: './tableform.component.html',
  styleUrl: './tableform.component.css'
})
export class TableformComponent {

tasklist:any[]=[];

constructor(private todo:TodoappService){
this.tasklist=this.todo.tasklist;
}
delettask(index:number){
this.todo.delettask(index);
}

changetoggle(index:number){
  this.tasklist[index].iscomplate=!this.tasklist[index].iscomplate;
  console.log(this.tasklist[index].iscomplate);
}
toggle(index:number){
  return {'text-decoration':this.tasklist[index].iscomplate ? 'line-through' : 'none'};
}
}
