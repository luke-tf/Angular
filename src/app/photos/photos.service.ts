import { Injectable } from "@angular/core";
import { Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Photos } from "./photos"
import { Observable } from 'rxjs';


@Injectable()
export class PhotosService {

constructor(private http: HttpClient) { }

    protected UrlServiceV1: string = "https://jsonplaceholder.typicode.com/photos";

    getPhotos() : Observable<Photos[]> {
        return this.http.get<Photos[]>(this.UrlServiceV1);
    }
}