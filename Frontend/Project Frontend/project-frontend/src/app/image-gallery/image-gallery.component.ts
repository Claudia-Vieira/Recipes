import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  public imageOneUrl="./assets/leite-creme.jpg";
  public imageTwoUrl="./assets/bolo-chocolate.jpg";
  public imageThreeUrl='./assets/baba-camelo.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
