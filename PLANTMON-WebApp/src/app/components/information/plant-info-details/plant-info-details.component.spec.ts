import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInfoDetailsComponent } from './plant-info-details.component';

describe('PlantInfoDetailsComponent', () => {
  let component: PlantInfoDetailsComponent;
  let fixture: ComponentFixture<PlantInfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantInfoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
