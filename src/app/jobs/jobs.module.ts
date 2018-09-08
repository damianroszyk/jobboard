import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { PostingsComponent } from './postings/postings.component';
import { PostingsHeaderComponent } from './postings-header/postings-header.component';
import { PostingComponent } from './posting/posting.component';
import { AddPostingComponent } from './add-posting/add-posting.component';
@NgModule({
  imports: [
    CommonModule,
    JobsRoutingModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  declarations: [
    PostingsComponent,
    AddPostingComponent,
    PostingsHeaderComponent,
    PostingComponent
  ]
})
export class JobsModule { }
