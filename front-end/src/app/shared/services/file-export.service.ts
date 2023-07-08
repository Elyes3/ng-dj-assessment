import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileExport } from '../interfaces/file-export';
import { environment } from 'environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FileExportService {
  constructor(private  http :HttpClient) { }
  exportFile(fileExport : FileExport)
  {
    return this.http.post<FileExport>(environment.API_URL+'/document/annotations/export/',fileExport,{observe : 'response'}).subscribe(response =>{
      if (response.status === 200){
        const data : any = response.body;
      }
    });
  }

}
