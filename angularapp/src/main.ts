import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddSongComponent } from './app/add-song/add-song.component';
import { SongListComponent } from './app/song-list/song-list.component';
import { EditSongComponent } from './app/edit-song/edit-song.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule),
    AddSongComponent,
    SongListComponent,
    EditSongComponent
  ]
}).catch(err => console.error(err));