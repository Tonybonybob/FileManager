import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileManagerComponent } from './components/file-manager/file-manager.component';
import { FileManagerTreeComponent } from './components/file-manager/file-manager-tree/file-manager-tree.component';
import { FileManagerWorkspaceComponent } from './components/file-manager/file-manager-workspace/file-manager-workspace.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { AddFolderModalComponent } from './components/modals/add-folder-modal/add-folder-modal.component';
import { RenameElementModalComponent } from './components/modals/rename-element-modal/rename-element-modal.component';
import { DeleteElementModalComponent } from './components/modals/delete-element-modal/delete-element-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    FileManagerComponent,
    FileManagerTreeComponent,
    FileManagerWorkspaceComponent,
    AddFolderModalComponent,
    RenameElementModalComponent,
    DeleteElementModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FileUploadModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
