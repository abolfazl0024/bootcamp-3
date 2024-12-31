import { Component } from '@angular/core';
import { FormComponent } from "./form/form.component";
import { TableformComponent } from "./tableform/tableform.component";

@Component({
  selector: 'app-todoapp',
  imports: [FormComponent, TableformComponent],
  templateUrl: './todoapp.component.html',
  styleUrl: './todoapp.component.css'
})
export class TodoappComponent {

}
