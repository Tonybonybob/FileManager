import { Injectable } from '@angular/core';
import { FileManagerService } from './file-manager.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedEventsService {
  child = []
  route = []
  childTree;
  constructor(private fileService: FileManagerService) { }

  openFolder(obj, id): Observable<any> {
    console.log(obj);
    this.child = this.getDataFromFileService(obj, id)
    this.route.push(obj)
    const data: any = {
      child: this.child,
      route: this.route,
    }
    // this.opened.push(id);
    return of(data)
  }

  addElement(element, obj, id): Observable<any> {
    this.child = this.getDataFromFileService(obj, id)
    this.child.push(element)
    this.childTree = this.child
    return of(this.childTree);
  }

  getDataFromFileService(obj, id) {
    return this.fileService.inFolder(obj, id)
  }
}
