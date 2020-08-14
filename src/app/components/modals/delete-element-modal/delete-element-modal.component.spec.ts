import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteElementModalComponent } from './delete-element-modal.component';

describe('DeleteElementModalComponent', () => {
  let component: DeleteElementModalComponent;
  let fixture: ComponentFixture<DeleteElementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteElementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteElementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
