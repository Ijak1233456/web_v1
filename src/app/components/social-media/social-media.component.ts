import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  protected socialMediaList = [
    { mediaName: "instagram", icon: "instagram", url: "@wine"},
    { mediaName: "facebook", icon: "fb", url: "facebook.com/wine"},
  ];

  protected shareCount!: number;

  constructor() {
    this.shareCount = 126;
  }

  ngOnInit(): void {
  }

}
