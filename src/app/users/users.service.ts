import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Users } from "./users"
import { Observable } from 'rxjs';


@Injectable()
export class UsersService {

constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://jsonplaceholder.typicode.com/users";

    getUsers() : Observable<Users[]> {
        return this.http.get<Users[]>(this.UrlServiceV1);
    }
}