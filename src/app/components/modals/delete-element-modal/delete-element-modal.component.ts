import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-element-modal',
  templateUrl: './delete-element-modal.component.html',
  styleUrls: ['./delete-element-modal.component.scss']
})
export class DeleteElementModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DeleteElementModalComponent>, @Inject(MAT_DIALOG_DATA) public data) { }

  deleteItem: string;
  variants = [
    { text: 'Видалити тільки папку', value: false },
    { text: 'Видалити папку з файлами що в ній', value: true }
  ]
  ngOnInit(): void {
  }
  folderData() {
    if (this.data) {
      const data = {
        deleteAll: this.deleteItem,
      }
      return data

    } else {
      const data = {
        deleteAll: true
      }
      return data

    }

  }

}
