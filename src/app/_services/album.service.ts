import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable()
export class AlbumService {
  private baseUrl = 'http://localhost:3000/albums';

  constructor() {}

  public getAllAlbums(page, sort) {
    return axios.get(
      this.baseUrl + '?_page=' + page + '&_limit=5&_sort=' + sort
    );
  }
}
