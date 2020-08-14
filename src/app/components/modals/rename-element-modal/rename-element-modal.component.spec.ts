import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenameElementModalComponent } from './rename-element-modal.component';

describe('RenameElementModalComponent', () => {
  let component: RenameElementModalComponent;
  let fixture: ComponentFixture<RenameElementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenameElementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenameElementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
