import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Music } from "src/app/models/music";

const httpOptions = {
  cors: 'no-cors',
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  apiURL: string = 'http://ec2-3-22-185-67.us-east-2.compute.amazonaws.com:8080/TasteBass/';

  constructor(private http: HttpClient) { }

  searchTrack(data: string): Observable<any> {
    return this.http.get(`${this.apiURL}searchTrack/track/${data}`, { withCredentials: true });
  }

  getRecommended(): Observable<any> {
    return this.http.get(`${this.apiURL}track/getRecommended`, { withCredentials: true });
  }

  addTrack(music_name: string, music_artist: string, spotify_id: string, music_pic: string, music_type: string): Observable<any> {
    console.log({music_name, music_artist, spotify_id, music_pic, music_type});
    return this.http.post(`${this.apiURL}addTrack`, {music_name, music_artist, spotify_id, music_pic, music_type}, { withCredentials: true });
  }

  getTracks(): Observable<any> {
    return this.http.get(`${this.apiURL}getTracks`, { withCredentials: true });
  }
}
