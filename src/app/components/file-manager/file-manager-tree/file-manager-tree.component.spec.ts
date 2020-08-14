import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileManagerTreeComponent } from './file-manager-tree.component';

describe('FileManagerTreeComponent', () => {
  let component: FileManagerTreeComponent;
  let fixture: ComponentFixture<FileManagerTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileManagerTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileManagerTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
