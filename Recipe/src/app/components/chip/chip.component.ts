import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  @Input() text: String = '';
  @Input() color: String = 'primary';
  @Input() classColor: String = 'text-yellow-400';
}
