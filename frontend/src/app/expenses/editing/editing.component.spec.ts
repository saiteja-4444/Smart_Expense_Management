import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingComponent } from './editing.component';

describe('EditingComponent', () => {
  let component: EditingComponent;
  let fixture: ComponentFixture<EditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
