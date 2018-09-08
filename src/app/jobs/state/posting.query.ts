import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { PostingStore, PostingState } from './posting.store';
import { Posting } from './posting.model';

@Injectable({
  providedIn: 'root'
})
export class PostingQuery extends QueryEntity<PostingState, Posting> {

  constructor(protected store: PostingStore) {
    super(store);
  }

}
