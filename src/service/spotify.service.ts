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
            'Authorization': 'Bearer BQBvFHGqyHMdA77IhFBBRLQkfZzKNiWOLHpOj8kNAV4eBxdGpMZX-tqtK4rnpsPsC8wYcMyTxp1EUABWXb7CbYHdVqbW3K1tDoWeruNUe53rS8PqXueFd9pOTJPGyHgRfiUKbrPPN3uTLQlH_a9g-72ij4LVN715kW1NjK2on9BpJntiUPDs7eIStW9M4_HfE2my2Fsha62wjPExVlw20E7FOXGY0qI8DgsWmo68sHWreonWFyvvt0GVqdv_2higyGFYL9s2D5jjNg'
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