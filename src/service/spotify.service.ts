import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {
    constructor(private http: HttpClient) { }
    static readonly API_PATH = `https://api.spotify.com/v1/search`;
    static readonly CLIENT_ID = `dbf8047a9bf9476ea6b42a2940805354`;
    
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer BQCbIAahcEXkZjRMdtgoCIVqgqfUs-fpRmhf4olYnlfRuUEyaYaT04O8jZE6_0gq59xsxDzU7Z-Cchob31v3dNgH6zq7-1k_Wksl20qRx3vvzhpP-nUGEbB8Ki76iZeigaus9ksaITxtdejiQnkwOfOJ_iwg9kFj6INqSxcCcTKAkrncaeHo2kx-lGmqeds5mAWFnSew-inUrtfWnpxVkdnihdZce6xPnhFNFCCLQhH_7KLML3bYfcyX810cOdq6r67A7HEK2c9d'
        })
    }
    scopes = 'user-read-private user-read-email';

    public getAlbum(search: string) {
        return this.http.get(SpotifyService.API_PATH + `?q=${search}&type=track&limit=5&offset=0`, this.httpOptions);
    }

    public login() {
        const url = `https://accounts.spotify.com/authorize?client_id=${SpotifyService.CLIENT_ID}&response_type=code&redirect_uri=http://localhost:4200&scope=user-read-private%20user-read-email&state=34fFs29kd09`
        return this.http.get(url);
    }
}