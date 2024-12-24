import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
@Input() backgroundcolor:string='';
@Input() selectedcolor:any;


  headercolor=()=>{
    return this.backgroundcolor;
  }


}
