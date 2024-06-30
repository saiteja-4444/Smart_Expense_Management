import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryManagementFormComponent } from './category-management-form.component';

describe('CategoryManagementFormComponent', () => {
  let component: CategoryManagementFormComponent;
  let fixture: ComponentFixture<CategoryManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryManagementFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
