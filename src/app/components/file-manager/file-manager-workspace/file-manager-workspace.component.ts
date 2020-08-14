import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-manager-workspace',
  templateUrl: './file-manager-workspace.component.html',
  styleUrls: ['./file-manager-workspace.component.scss']
})
export class FileManagerWorkspaceComponent implements OnInit {
  @Input() some;
  @Input() child;
  @Output() prev = new EventEmitter()
  @Output() checks = new EventEmitter()
  @Output() openFolder = new EventEmitter()
  @Output() selectFolder = new EventEmitter()
  selectedItem: number = -1;
  constructor() { }

  ngOnInit(): void {
  }

  prevFolder(event) {
    this.prev.emit(event)
  }
  check(event) {
    this.checks.emit(event)
  }
  openFolderWorkspace(obj, id) {
    const data = {
      obj,
      id
    }
    this.openFolder.emit(data)
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
  addModalOpen() {

  }
}
