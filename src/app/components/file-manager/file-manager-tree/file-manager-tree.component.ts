import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { SharedEventsService } from 'src/app/services/shared-events.service';
import { Subscription } from 'rxjs';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';


@Component({
  selector: 'app-file-manager-tree',
  templateUrl: './file-manager-tree.component.html',
  styleUrls: ['./file-manager-tree.component.scss']
})
export class FileManagerTreeComponent implements OnInit, OnDestroy {
  @Input() child;
  @Input() some;
  @Input() opened;
  @Output() addFolder = new EventEmitter();
  @Output() openFolderT = new EventEmitter();
  @Output() selectFolder = new EventEmitter();
  fSub: Subscription
  route = []
  childTree;
  exp: number;
  selectedItem: number = -1;
  // child = []
  constructor(private sharedService: SharedEventsService) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.fSub.unsubscribe()
  }
  openFolderTree(event, obj, id) {
    event.stopPropagation()
    const data = {
      obj,
      id
    }

    this.openFolderT.emit(data)
  }
  openMenu(event: MouseEvent, element, viewChild: MatMenuTrigger) {
    event.preventDefault();
    viewChild.openMenu();
  }
  openTree(event, obj, id, num) {
    event.stopPropagation()
    console.log(num);

    if (num === 1) {
      this.opened = []
      this.opened.push(id)
    } else {
      this.opened.push(id);
    }
    this.childTree = this.sharedService.getDataFromFileService(obj, id);
  }
  addElement(event, obj, id) {

    event.stopPropagation()
    let data = {
      obj,
      id
    }

    this.addFolder.emit(data);
  }

  activeMenu(i) {
    this.exp = i;
  }
  selectItem(obj, id, i) {
    console.log(this.selectedItem);
    console.log(i);
    if (this.selectedItem === i) {
      obj.id = 0
      this.selectedItem = -1;
      this.selectFolder.emit(obj);

    } else {
      this.selectedItem = i
      this.selectFolder.emit(obj);

    }
  }
}
