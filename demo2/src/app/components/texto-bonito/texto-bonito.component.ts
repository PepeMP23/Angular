import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-texto-bonito',
  templateUrl: './texto-bonito.component.html',
  styleUrls: ['./texto-bonito.component.scss']
})
export class TextoBonitoComponent {

  @Input() titulo: string = '';

}
