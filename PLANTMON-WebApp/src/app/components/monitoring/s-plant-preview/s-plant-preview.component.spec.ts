import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPlantPreviewComponent } from './s-plant-preview.component';

describe('SPlantPreviewComponent', () => {
  let component: SPlantPreviewComponent;
  let fixture: ComponentFixture<SPlantPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPlantPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPlantPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
