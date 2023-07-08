import { Component, Input } from '@angular/core';
import { Label } from '../shared/interfaces/label';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
@Input() label : Label = {
  annotation : "",
  bgColor : "",
  id : null
};

}
