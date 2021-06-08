import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPlantPreviewComponent } from './m-plant-preview.component';

describe('MPlantPreviewComponent', () => {
  let component: MPlantPreviewComponent;
  let fixture: ComponentFixture<MPlantPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPlantPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPlantPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
