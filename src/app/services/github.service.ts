// Injectable package allows to Inject the service as a dependency
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username = 'nikitparajuli';
    private client_id = '7645a41723827294c21d';
    private client_secret = '889afda0ee73ad1a8336c2f29c9e5ce05e9b662d';

    constructor(private _http: Http){
        console.log('Github Service Init...');
    }

    // Function to getUser from Github
    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username)
            .map(res => res.json());
    }

    //Get Repos
     getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos')
            .map(res => res.json());
    }

    //update username
    updateUsername(username:string){
        this.username = username;
    }
}