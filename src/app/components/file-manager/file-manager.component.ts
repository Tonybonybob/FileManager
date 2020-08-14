import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileManagerService } from 'src/app/services/file-manager.service';
import { SharedEventsService } from 'src/app/services/shared-events.service';
import { Observable, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddFolderModalComponent } from '../modals/add-folder-modal/add-folder-modal.component';
import { DeleteElementModalComponent } from '../modals/delete-element-modal/delete-element-modal.component';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit, OnDestroy {
  comand = {
    add: 'add',
    open: 'open',
    move: 'move'
  }
  some: any
  child = []
  childTree
  opened: number[] = [];
  route = []
  fSub: Subscription;
  addFolderToSelect
  addSelection;
  selectFolderTrigger = false;
  selectFileTrigger = false;
  moveTo
  constructor(public dialog: MatDialog, private service: FileManagerService, private sharedService: SharedEventsService) {

  }



  moveToFolder(obj, id) {

  }

  check() {
    // console.log(this.child);
    // console.log(this.route);

    console.log(this.moveTo);

  }
  openFolder(event) {
    console.log(event);

    this.fSub = this.sharedService.openFolder(event.obj, event.id)
      .subscribe(result => {
        this.route = result.route;
        this.child = result.child;
      })
  }
  prevFolder() {
    if (this.route.length > 1) {
      this.child = this.service.inFolder(this.route[this.route.length - 2], this.route[this.route.length - 2].id)
      this.route.pop()
    } else if (this.route.length <= 1) {
      this.child = this.some.root.children
      this.route.pop()
    }

  }

  moveElement(element, to) {
    debugger
    // to.children.push(element)
    console.log(element);
    console.log(to);
    this.service.moveTo(this.some.root, element, to);


  }
  addElement(event) {
    console.log(event)
    event.stopPropagation()
    const elem = {
      "id": 22,
      "name": "File B",
      "description": "Description file",
      "isFolder": "false",
      "parent": "root",
      "icon": {
        "icon": "file.png",
        "color": "",
        "defaultImg": "true"
      },
      children: []
    }
    let arr
    this.child = this.service.inFolder(event.obj, event.id)
    console.log(arr)
    this.child.push(elem)
    this.childTree = this.child

    // this.child.push(elem);
  }
  ngOnInit(): void {
    this.some = this.service.getFilesObject()
  }
  ngOnDestroy() {
    this.fSub.unsubscribe();
  }
  selectFolder(event) {
    if (event.isFolder) {
      // console.log(this.some.root);
      this.selectFolderTrigger = true;
      this.selectFileTrigger = false;
      this.addFolderToSelect = event
      this.addSelection = event;
    } else if (!event.isFolder) {
      this.selectFolderTrigger = false;
      this.selectFileTrigger = true;
      this.addFolderToSelect = null;
      this.addSelection = event;

    }
    this.moveTo = this.service.findAllFolder(this.some);

    console.log(event);
    console.log(this.selectFolderTrigger);


  }
  openAddFolderModal() {

    let dialogRef = this.dialog.open(AddFolderModalComponent, {
      data: this.addFolderToSelect ? this.addFolderToSelect : this.some.root
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      if (res) {
        if (res.parent === 0) {
          this.child = this.service.inFolder(this.some.root, res.parent)
          this.child.push(res);
          this.childTree = this.child
        }
        else {
          console.log(this.addFolderToSelect);
          this.child = this.service.inFolder(this.addFolderToSelect, res.parent)
          this.child.push(res);
          this.childTree = this.child
        }
        console.log(this.child)
      }
    });
  }
  openDeleteModal() {
    let dialogRef = this.dialog.open(DeleteElementModalComponent, {
      data: this.addFolderToSelect ? this.addFolderToSelect : this.some.root
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        console.log(res);
        if (res.deleteAll) {
          this.child = this.service.deleteElement(this.some.root, this.addFolderToSelect)
        } else if (!res.deleteAll) {
          //this.child = 
          let arr = []
          arr = this.service.deleteAll(this.some.root, this.addFolderToSelect)
          this.child = arr
          // arr.forEach(val =>{
          //   val.forEach(element => {
          //     element.parent
          //   });
          // })
          // this.child = arr;
          console.log(arr)
        }
        // if (res.parent === 0) {
        //   this.child = this.service.inFolder(this.some.root, res.parent)
        //   this.child.push(res);
        //   this.childTree = this.child
        // }
        // else {
        //   console.log(this.addFolderToSelect);
        //   this.child = this.service.inFolder(this.addFolderToSelect, res.parent)
        //   this.child.push(res);
        //   this.childTree = this.child
        // }
        // console.log(this.child)
      }
    });
  }
}
