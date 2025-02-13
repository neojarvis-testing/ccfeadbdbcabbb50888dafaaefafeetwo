import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';  //
import { AppRoutingModule } from './app-routing.module';  //
import { AppComponent } from './app.component';
import { AddSongComponent } from './add-song/add-song.component';
import { SongListComponent } from './song-list/song-list.component';
import { EditSongComponent } from './edit-song/edit-song.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSongComponent,
    SongListComponent,
    EditSongComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,  //
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
