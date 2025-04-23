import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewholdingComponent } from './newholding.component';

describe('NewholdingComponent', () => {
  let component: NewholdingComponent;
  let fixture: ComponentFixture<NewholdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewholdingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewholdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
