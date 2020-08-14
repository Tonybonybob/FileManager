import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerWorkspaceComponent } from './file-manager-workspace.component';

describe('FileManagerWorkspaceComponent', () => {
  let component: FileManagerWorkspaceComponent;
  let fixture: ComponentFixture<FileManagerWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagerWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
