import { Routes } from '@angular/router';
import { HomeComponent } from './app/components/home/home.component';
import { AlbumDetailComponent } from './app/components/albums/album-detail/album-detail.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
