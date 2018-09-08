
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingsComponent } from './postings.component';

describe('ListComponent', () => {
  let component: PostingsComponent;
  let fixture: ComponentFixture<PostingsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
