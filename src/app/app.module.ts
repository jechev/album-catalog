import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AlbumService } from './_services/album.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/router';
import { AlbumListComponent } from './components/albums/album-list/album-list.component';
import { PaginationModule } from 'ngx-bootstrap';
import { AlbumDetailComponent } from './components/albums/album-detail/album-detail.component';
import { AddReviewComponent } from './components/reviews/add-review/add-review.component';
import { ReviewService } from './_services/review.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    AddReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    PaginationModule.forRoot()
  ],
  providers: [AlbumService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule {}
