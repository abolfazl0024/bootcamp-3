import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-session7',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './session7.component.html',
  styleUrl: './session7.component.css'
})
export class Session7Component {


 form:FormGroup=new FormGroup({
  firstname:new FormControl("",[Validators.required]),
  gender:new FormControl("")
})
constructor(){
console.log(this.person)
}


person:any[]=[]
addgender(){
  if(this.form.valid){
    if(this.form.value.gender==="women"){
    const  personname={
  firstname:this.form.value.firstname ,
  gender:this.form.value.gender,
  
  }
this.person.push(personname);
this.form.reset();
};
    
  };
  
}
}
