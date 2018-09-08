import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingsHeaderComponent } from './postings-header.component';

describe('PostingsHeaderComponent', () => {
  let component: PostingsHeaderComponent;
  let fixture: ComponentFixture<PostingsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostingsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
