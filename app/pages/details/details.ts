import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GitHubService} from '../../services/github';

@Component({
    templateUrl: 'build/pages/details/details.html',
    providers: [GitHubService]
})
export class DetailsPage {
    public details = '';
    public repo;
 
    constructor(private github: GitHubService, 
                private nav: NavController, 
                private navParams: NavParams) {
        
        this.repo = navParams.get('repo');
        
        this.github.getDetails(this.repo).subscribe(
            data => this.details = data.json(),
            err => {
                if (err.status == 404) {
                    this.details = 'This details does not have a Records. :(';
                } else {
                    console.error(err);
                }
            },
            () => console.log('getDetails completed')
        );
    }
}

