import { Component, ElementRef,Input,EventEmitter, Output } from '@angular/core';
import { Badge } from '../shared/interfaces/badge';
import { SelectedText } from '../shared/interfaces/selected-text';
@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent {
@Input() paragraphs : Badge[] = [{
  label :'',
  text : '',
  bgColor : '',
  start : -1,
  end : -1
}];
constructor(private elementRef:ElementRef){
}
private selectionStart?: number;
private selectionEnd?: number;
@Output() textSelected = new EventEmitter<SelectedText>();
textSelectionEvent(event: MouseEvent | TouchEvent): void {
  const selection = window.getSelection();
  if (selection != null && selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const selected = range.cloneRange();
    selected.selectNodeContents(this.elementRef.nativeElement);
    selected.setEnd(range.startContainer, range.startOffset);
    this.selectionStart = [...selected.toString()].length;
    this.selectionEnd = this.selectionStart + [...range.toString()].length;
  } else {
    this.selectionStart = undefined;
    this.selectionEnd = undefined;
  }
  const obj : SelectedText = {
    start : this.selectionStart,
    end : this.selectionEnd,
    text : selection?.toString()
  }
  this.textSelected.emit(obj);
}
}
