import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
  moduleId: module.id,
  selector: 'github',
  templateUrl: `github.component.html`,
  //add service as a provider
  providers: [GithubService]
})
export class GithubComponent  {
    //can use this property in the template
    user: any;
    repos: any;
    username: string;
    //Error Flag
    noUserError: boolean;

    //  Constructor will automatically run when the component is rendered
    //  Inject Service into the constructor
    constructor(private _githubService:GithubService){
        console.log('Github Component Init');
        this.username = "nikitparajuli";
    }

    //Search Function
    search(){
        this._githubService.updateUsername(this.username)
        debugger;
        this._githubService.getUser().subscribe((user) => {
            this.user = user;
            //Hide Error Message
            this.noUserError = undefined;
        }, (error) => {
            // Catch Error if No User if Found
            this.noUserError = true;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}
