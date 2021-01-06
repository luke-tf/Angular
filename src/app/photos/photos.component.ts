import { Component, OnInit } from '@angular/core';
import { Photos } from './photos';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.component.html'
})
export class PhotosComponent implements OnInit {

  constructor(private photosService: PhotosService) { }

  public photos: Photos[];

  ngOnInit() {
    this.photosService.getPhotos()
      .subscribe(
        photos => {
          this.photos = photos;
          console.log(photos);
        },
        error => console.log(error)
      );
  }
}