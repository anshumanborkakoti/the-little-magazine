import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTilesComponent } from './photo-tiles.component';

describe('PhotoTilesComponent', () => {
  let component: PhotoTilesComponent;
  let fixture: ComponentFixture<PhotoTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
