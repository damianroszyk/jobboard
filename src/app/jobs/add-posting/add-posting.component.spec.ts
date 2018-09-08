
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostingcomponent } from './add-posting.component';

describe('FormComponent', () => {
  let component: AddPostingcomponent;
  let fixture: ComponentFixture<AddPostingcomponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostingcomponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPostingcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
