import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConfirmComponent } from './create-confirm.component';

describe('CreateConfirmComponent', () => {
  let component: CreateConfirmComponent;
  let fixture: ComponentFixture<CreateConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateConfirmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
