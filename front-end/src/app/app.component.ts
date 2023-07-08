import { Component } from '@angular/core';
import { Label } from './shared/interfaces/label';
import { Badge } from './shared/interfaces/badge';
import { SelectedText } from './shared/interfaces/selected-text';
import { FileExportService } from './shared/services/file-export.service';
import { FileExport } from './shared/interfaces/file-export';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fileExportService : FileExportService){
    
  }
  labelList : Label[]= []
  labelText : string = '';
  text : string = "3+ years Swift & Objective-C and experience with iOS internals Experience building an entire app from scratch and ideally a portfolio of apps featured in the App Store Someone who knows every trick in the book on UI transitions, network communication and memory/battery efficiency Strong UI/design skill experience is a plus";
  paragraphs : Badge[] = [{
    text : this.text,
    label : '',
    bgColor : '',
    start : 0,
    end : this.text.length
  }]
  id : number = 1;
  selectedLabel : Label = {
    annotation : '',
    bgColor : '',
    id : null
  };
  copyParagraph : String =  this.paragraphs[0].text
  generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }
  addLabel(){
    if (this.labelText.trim()){
    const label : Label = 
    {
      bgColor : this.generateRandomColor(),
      annotation : this.labelText.trim(),
      id : this.id
    }
    this.id++;
    this.labelList.push(label);
    this.labelText = '';
  }

  }

  selectLabel(label : Label){
    this.selectedLabel = {...label};
  }
  exportFile(){

    let annotations : Badge[] = this.paragraphs.filter(paragraph =>{
      if (paragraph.label.length > 0 && paragraph.text.length > 0){

         const obj : Badge ={
          start : paragraph.start,
          end : paragraph.end,
          label : paragraph.label,
          text : paragraph.text
        } 
         return obj
    }
      else
        return {
          start : -1,
          end : -1,
          label : "",
          text : ""
        }
    }).filter(annotation => annotation.start != - 1 && annotation.end != -1 && annotation.label && annotation.text)
     const fileExport : FileExport= {
      document : this.text,
      annotations : annotations
    }
    const res : any = this.fileExportService.exportFile(fileExport)
  }
  mutateText(selectedText : SelectedText){

    if (this.selectedLabel.annotation && this.selectedLabel.bgColor && this.selectedLabel.id && selectedText.end !== undefined && selectedText.start !== undefined && ((selectedText.end - selectedText.start) > 0)){
      let startParagraph : Badge =
      {
        text : '',
        bgColor : '',
        label : '',
        start : -1,
        end : -1
      }
      let selectedParagraph : Badge =
      {
        text : '',
        bgColor : '',
        label : '',
        start : -1,
        end : -1
      }
      let endParagraph : Badge =
      {
        text : '',
        bgColor : '',
        label : '',
        start : -1,
        end : -1
      }
      // @ts-ignore
      const index = this.paragraphs.findIndex(paragraph => ((paragraph.start <= selectedText.start) && (paragraph.end >= selectedText.end)))
      let paragraph = this.paragraphs[index];
      this.paragraphs.splice(index,1);
      if (selectedText.end != undefined && selectedText.start != undefined && selectedText.text != undefined){
      selectedParagraph = 
      {
        text : selectedText.text,
        bgColor : this.selectedLabel.bgColor,
        label : this.selectedLabel.annotation,
        start : selectedText.start,
        end : selectedText.end
      }
      endParagraph =
      {
        text : '',
        bgColor : '', 
        label : '',
        start : selectedText.end,
        end : paragraph.end
      }
      endParagraph.text = this.copyParagraph.substring(selectedText.end,paragraph.end);
      startParagraph =
      {
        text : '',
        bgColor : '',
        label : '',
        start : paragraph.start,
        end : selectedText.start
      }
      startParagraph.text = this.copyParagraph.substring(startParagraph.start,startParagraph.end);
      if (startParagraph.text.length > 0){
        this.paragraphs.splice(index,0,startParagraph);
        this.paragraphs.splice(index + 1,0,selectedParagraph);
        if (endParagraph.text.length > 0){
          this.paragraphs.splice(index + 2,0,endParagraph);
        }
      }
      else
      {
        this.paragraphs.splice(index,0,selectedParagraph);
        if (endParagraph.text.length > 0){
          this.paragraphs.splice(index + 1,0,endParagraph);
        }
      }
    };
      
  }
}

}
