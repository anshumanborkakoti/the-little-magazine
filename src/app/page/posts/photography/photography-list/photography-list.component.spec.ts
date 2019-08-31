import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyListComponent } from './photography-list.component';

describe('PhotographyListComponent', () => {
  let component: PhotographyListComponent;
  let fixture: ComponentFixture<PhotographyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
