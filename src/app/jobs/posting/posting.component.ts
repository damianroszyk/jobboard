import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Posting } from '../state';

/**
 * UI component for Posting presentation
 */
@Component({
  selector: 'app-posting',
  templateUrl: './posting.component.html',
  styleUrls: ['./posting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostingComponent {
  @Input() posting: Posting;

}
