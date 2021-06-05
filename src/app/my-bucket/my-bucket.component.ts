import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { MusicService } from '../_services/music.service';

import { Music } from 'src/app/models/music';

@Component({
  selector: 'app-my-bucket',
  templateUrl: './my-bucket.component.html',
  styleUrls: ['./my-bucket.component.css']
})
export class MyBucketComponent implements OnInit {

  currentUser: any;
  musicService: MusicService;
  music: Music;

  tracks: Music[] = [];

  constructor(private token: TokenStorageService, musicService: MusicService) {
    this.musicService = musicService;
  }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.getTracks();
  }

  
  getTracks(): void {
    this.musicService.getTracks().subscribe((response) => {
      this.tracks = [];
      response.forEach((music) => {
        this.tracks.push(music);
      });
    });
  }
}
