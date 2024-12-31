import { EventEmitter, Injectable } from '@angular/core';
interface task{
  task:string,
  description:string,
  priority:string,
  date:Date,
  iscomplate:boolean,
}
@Injectable({
  providedIn: 'root'
})


export class TodoappService {

  constructor() { }

tasklist:task[]=[];

addtask(taskdata:task){
this.tasklist.push(taskdata);
}
delettask(index:number){
this.tasklist.splice(index,1);
}
edittasklist(index:number,item:any){
  this.tasklist[index].task=item.task;
  this.tasklist[index].priority=item.priority;
  this.tasklist[index].description=item.description;
console.log( this.tasklist[index].task)

}

sendindex=new EventEmitter();
}
