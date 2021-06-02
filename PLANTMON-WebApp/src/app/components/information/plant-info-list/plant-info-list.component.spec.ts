import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantInfoListComponent } from './plant-info-list.component';

describe('PlantInfoListComponent', () => {
  let component: PlantInfoListComponent;
  let fixture: ComponentFixture<PlantInfoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantInfoListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantInfoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
