import { Component, OnInit, Input } from '@angular/core';
import { Album } from 'src/app/_models/album';
import { AlbumService } from 'src/app/_services/album.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {
  albums: Album[];
  page = 1;
  totalAlbums: number;

  // default sorting is by id
  sortBy = 'id';
  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.loadAlbums();
  }

  pageChanged(event: any): void {
    this.page = event.page;
    this.loadAlbums();
  }

  loadAlbums(sort?) {
    if (sort !== undefined) {
      this.sortBy = sort;
      this.page = 1;
    }
    this.albumService
      .getAllAlbums(this.page, this.sortBy)
      .then(res => {
        this.totalAlbums = res.headers['x-total-count'];
        this.albums = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}
