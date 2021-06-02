import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPlantDetailComponent } from './s-plant-detail.component';

describe('SPlantDetailComponent', () => {
  let component: SPlantDetailComponent;
  let fixture: ComponentFixture<SPlantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPlantDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPlantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
