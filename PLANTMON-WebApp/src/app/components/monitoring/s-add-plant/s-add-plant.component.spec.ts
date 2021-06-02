import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SAddPlantComponent } from './s-add-plant.component';

describe('SAddPlantComponent', () => {
  let component: SAddPlantComponent;
  let fixture: ComponentFixture<SAddPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SAddPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SAddPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
