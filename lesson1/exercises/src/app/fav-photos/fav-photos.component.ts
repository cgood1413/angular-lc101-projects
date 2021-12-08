import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photoSectionTitle = 'Photo/Image Section Title Here';
  image1 = 'https://upload.wikimedia.org/wikipedia/ru/c/c8/Sailor_Mars.png';
  image2 = 'https://editorial01.shutterstock.com/wm-preview-1500/5859918a/39058c0a/sailor-moon-1995-2001-shutterstock-editorial-5859918a.jpg';
  image3 = 'https://cdnb.artstation.com/p/assets/images/images/033/887/395/large/marta-fanals-sailorneptune-crop2.jpg?1610826689';

  constructor() { }

  ngOnInit() {
  }

}