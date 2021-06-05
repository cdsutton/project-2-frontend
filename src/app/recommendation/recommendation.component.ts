import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { MusicService } from '../_services/music.service';
import { AlertService } from '../_alert/alert.service';

import { Music } from 'src/app/models/music';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  currentUser: any;
  musicService: MusicService;
  alertService: AlertService;
  music: Music;

  tracks: Music[] = [];
  myBucket: Music[] = [];

  constructor(private token: TokenStorageService, musicService: MusicService, alertService: AlertService) { 
    this.musicService = musicService;
    this.alertService = alertService;
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getRecommended();
  }

  getRecommended(): void {
    this.musicService.getRecommended().subscribe((response) => {
      console.log(response);
      this.tracks = [];
      response.forEach((music) => {
        console.log(music);
        this.tracks.push(music);
      });
    });
  }

  onAddTrackClick(music: Music): void {
    this.musicService.addTrack(music.music_name, music.music_artist, music.spotify_id, music.music_pic, "track").subscribe((music) => {
      this.myBucket.push(music);
      this.alertService.success("Successfully added to My Bucket");
    });
  }


}
