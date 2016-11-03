import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';
import {GitHubService} from '../../services/github';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [GitHubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(private github: GitHubService,
    private nav: NavController) {
      this.getRepos();
      
  }

  getRepos() {
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      () => console.log('Details Retrieved')
    );
  }

  goToDetails(repo : any) {
    this.nav.push(DetailsPage, { repo: repo});
  }
}