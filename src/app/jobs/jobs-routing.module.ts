import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostingsComponent } from './postings/postings.component';
import { AddPostingComponent } from './add-posting/add-posting.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: PostingsComponent
  },
  {
    path: 'add',
    component: AddPostingComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
