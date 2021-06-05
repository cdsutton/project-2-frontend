import { Component } from '@angular/core';
import { MusicService } from '../_services/music.service';
import { AlertService } from '../_alert/alert.service';

import { Music } from 'src/app/models/music';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchInput: string;
  musicService: MusicService;
  alertService: AlertService;
  music: Music;

  tracks: Music[] = [];
  myBucket: Music[] = [];

  constructor(musicService: MusicService, alertService: AlertService) {
    this.musicService = musicService;
    this.alertService = alertService;
  }

  onGetTracksClick(): void {
    this.musicService.searchTrack(this.searchInput).subscribe((track) => {
      if (this.tracks != null) {
        this.tracks = [];
      }
      for (let i = 0; i < track.length; i++) {
        this.tracks.push(track[i]);
      }
    });
  }

  onAddTrackClick(music: Music): void {
    this.musicService.addTrack(music.music_name, music.music_artist, music.spotify_id, music.music_pic, "track").subscribe((music) => {
      this.myBucket.push(music);
      this.alertService.success("Successfully added to My Bucket");
    });
  }

}
