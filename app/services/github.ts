import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class GitHubService {
    constructor(private http: Http) {
    }

    getRepos(username) {
       
        let repos = this.http.get(`http://163.172.161.123:8080//api/v1/loans`);
        return repos;
    }

    getDetails(repo) {
        let headers = new Headers();        
      
       return this.http.get(`http://163.172.161.123:8080//api/v1/loans/` + repo);
    }
}