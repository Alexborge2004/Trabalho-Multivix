import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrugComponent } from './grug.component';

describe('GrugComponent', () => {
  let component: GrugComponent;
  let fixture: ComponentFixture<GrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
