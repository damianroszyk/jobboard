import { Injectable } from '@angular/core';
import { PostingStore } from './posting.store';
import { PostingDataService } from './posting-data.service';
import { Posting } from './posting.model';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  constructor(private postingStore: PostingStore,
              private postingDataService: PostingDataService) {
  }

  /**
   * get all entities from server
   * todo: pagination for sure and sorting/filtering
   */
  get() {
    this.postingDataService.get().subscribe((entities: Posting[]) => {
      this.postingStore.add(entities);
      this.postingStore.setLoading(false);
    });
  }

  /**
   * add new record
   * todo: call to backend then add to store
   * @param entity: new Posting
   */
  add(entity: Posting) {
    // this.postingDataService.post().subscribe((entity: ServerResponse) => {
      this.postingStore.add(entity);
    // });
  }

}
