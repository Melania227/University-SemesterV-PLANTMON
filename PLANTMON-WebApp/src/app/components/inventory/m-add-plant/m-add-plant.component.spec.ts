import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAddPlantComponent } from './m-add-plant.component';

describe('MAddPlantComponent', () => {
  let component: MAddPlantComponent;
  let fixture: ComponentFixture<MAddPlantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAddPlantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MAddPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
