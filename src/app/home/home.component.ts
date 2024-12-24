import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AbstractControl, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NonNullAssert } from '@angular/compiler';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent ,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  nowhitespace():ValidatorFn{
    return (control:AbstractControl): ValidationErrors | null => {
      const nospace=(control.value || "").trim().length==0;
      const isvalid=!nospace;
      return isvalid ? null :{nospace : true};
    }
  }




color:string=''
headercolor=new FormControl('',[Validators.pattern(/^rgb\([1,2,0]?\d{1,2},[1,2,0]?\d{1,2},[1,2,0]?\d{1,2}\)$/),this.nowhitespace()]);
// nameerror='';
// onsubmit(){
//   if(this.headercolor.valid){
// this.nameerror="الگوی وارده صحیح می باشد "
//   }
// }


}
