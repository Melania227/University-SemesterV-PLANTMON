import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MPlantEditComponent } from './m-plant-edit.component';

describe('MPlantEditComponent', () => {
  let component: MPlantEditComponent;
  let fixture: ComponentFixture<MPlantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MPlantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MPlantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
