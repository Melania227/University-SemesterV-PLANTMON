import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPlantEditComponent } from './s-plant-edit.component';

describe('SPlantEditComponent', () => {
  let component: SPlantEditComponent;
  let fixture: ComponentFixture<SPlantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SPlantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SPlantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
