import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryDetailComponent } from './poetry-detail.component';

describe('PoetryDetailComponent', () => {
  let component: PoetryDetailComponent;
  let fixture: ComponentFixture<PoetryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
