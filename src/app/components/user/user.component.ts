import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userData: any;
  protected shareCount!: number;

  constructor() {
    this.shareCount = 126;
  }

  ngOnInit(): void {
  }

}
