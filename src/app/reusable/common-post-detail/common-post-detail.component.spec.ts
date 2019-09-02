import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailForTextComponent } from './common-post-detail.component';

describe('PostDetailForTextComponent', () => {
  let component: PostDetailForTextComponent;
  let fixture: ComponentFixture<PostDetailForTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailForTextComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailForTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
