import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Posting, PostingQuery, PostingService } from '../state';
import { Observable } from 'rxjs';

/**
 * wrapper component for postings. Takes care of fetching postings
 */
@Component({
  selector: 'app-postings',
  templateUrl: './postings.component.html',
  styleUrls: ['./postings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostingsComponent implements OnInit {

  loading$: Observable<boolean>;
  postings$: Observable<Posting[]>;

  constructor(
    private postingService: PostingService,
    private postingQuery: PostingQuery
  ) {}


  ngOnInit() {
    this.postingService.get();
    this.loading$ = this.postingQuery.selectLoading();
    this.postings$ = this.postingQuery.selectAll();
  }
}
