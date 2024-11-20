import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-one',
  imports: [NgIf],
  templateUrl: './component-one.component.html',
  styleUrl: './component-one.component.css'
})
export class ComponentOneComponent {
  message1: string = 'Hola Mundo';
  message2: string = 'Hola Angular';

  band: boolean = true;
}
