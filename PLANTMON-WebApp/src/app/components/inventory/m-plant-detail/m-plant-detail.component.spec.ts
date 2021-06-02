import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPlantDetailComponent } from './m-plant-detail.component';

describe('MPlantDetailComponent', () => {
  let component: MPlantDetailComponent;
  let fixture: ComponentFixture<MPlantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPlantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPlantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
