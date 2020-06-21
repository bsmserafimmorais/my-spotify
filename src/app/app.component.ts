import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/service/spotify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-spotify';
  public albuns: any;
  values = '';

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {
    
  }

  onKey(event: KeyboardEvent) {
    this.values = (event.target as HTMLInputElement).value;
    this.getAlbuns(this.values);
    console.log('valor do va', this.values);
  }

  public getAlbuns(search: string) {
    this.spotifyService.getAlbum(search).subscribe(res => {
      this.albuns = res;
    })
  }



}
