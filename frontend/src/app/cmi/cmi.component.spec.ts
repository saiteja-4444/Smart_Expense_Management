import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMIComponent } from './cmi.component';

describe('CMIComponent', () => {
  let component: CMIComponent;
  let fixture: ComponentFixture<CMIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CMIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CMIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
