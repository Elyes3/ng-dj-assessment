import { Component, Input,EventEmitter,Output } from '@angular/core';
import { Label } from '../shared/interfaces/label';
@Component({
  selector: 'app-label-list',
  templateUrl: './label-list.component.html',
  styleUrls: ['./label-list.component.css']
})
export class LabelListComponent {
// Populate with props and events
@Output() labelSelected = new EventEmitter<Label>();
@Input() labelList : Label[] = [];
@Input() selectedLabel : Label = {
  bgColor : '',
  annotation:'',
  id:null,
};
selectLabel(label : Label){
  this.labelSelected.emit(label);
}
}
