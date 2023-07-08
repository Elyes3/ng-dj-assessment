import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import { LabelListComponent } from './label-list/label-list.component';
import { DocumentComponent } from './document/document.component';
import { BadgeComponent } from './badge/badge.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    LabelListComponent,
    DocumentComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
