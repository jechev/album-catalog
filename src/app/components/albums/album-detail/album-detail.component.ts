import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/_models/album';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from 'src/app/_services/album.service';
import { ReviewService } from 'src/app/_services/review.service';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album;
  constructor(
    private route: ActivatedRoute,
    private albumServie: AlbumService,
    private reviewService: ReviewService
  ) {}

  receiveNewReview($event) {
    this.album.reviews.push($event);
  }

  ngOnInit() {
    const albumId = this.route.snapshot.paramMap.get('id');
    const localReviews = this.reviewService.getLocalReviews(albumId);

    this.albumServie.getAlbumDetailsWithReviews(albumId).then(res => {
      this.album = res.data;
      this.album.reviews.push(...localReviews);
    });
  }
}
