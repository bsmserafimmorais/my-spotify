import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
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
