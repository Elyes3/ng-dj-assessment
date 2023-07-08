import { Component,Input } from '@angular/core';
import { Badge } from '../shared/interfaces/badge';
@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
constructor(){}
@Input() badge : Badge = {
  label : '',
  bgColor : '',
  text : '',
  start : -1,
  end : -1
};
}
