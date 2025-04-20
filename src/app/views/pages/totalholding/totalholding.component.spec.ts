import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalholdingComponent } from './totalholding.component';

describe('TotalholdingComponent', () => {
  let component: TotalholdingComponent;
  let fixture: ComponentFixture<TotalholdingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalholdingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalholdingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
