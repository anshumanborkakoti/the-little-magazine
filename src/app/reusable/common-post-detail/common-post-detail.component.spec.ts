import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonPostDetailComponent } from './common-post-detail.component';

describe('CommonPostDetailComponent', () => {
  let component: CommonPostDetailComponent;
  let fixture: ComponentFixture<CommonPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CommonPostDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
