import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Posting } from './posting.model';

export interface PostingState extends EntityState<Posting> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'posting' })
export class PostingStore extends EntityStore<PostingState, Posting> {

  constructor() {
    super();
  }

}

