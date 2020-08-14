import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { v4 } from 'uuid';
@Component({
  selector: 'app-add-folder-modal',
  templateUrl: './add-folder-modal.component.html',
  styleUrls: ['./add-folder-modal.component.scss']
})
export class AddFolderModalComponent implements OnInit {
  folderName
  folderDescription
  folderIcon
  constructor(public dialogRef: MatDialogRef<AddFolderModalComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    console.log(this.data);

  }
  file(event) {
    this.folderIcon = event.target.files[0].name;
    console.log(event)
  }
  folderData() {
    if (this.data.isFolder) {
      const data = {
        id: v4(),
        name: this.folderName,
        description: this.folderDescription,
        isFolder: true,
        parent: this.data ? this.data.id : 0,
        icon: {
          icon: this.folderIcon,
          defaultImg: this.folderIcon ? false : true,
          "color": "",
        },
        children: []

      }
      return data
    }
    return console.log('xer');

  }
}
