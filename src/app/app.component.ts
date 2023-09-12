import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo_web_v1';

  protected productList1 = [
    {
      imageLink: "/assets/img/product_1.jpg",
      category: "WEBSHOP",
      title: "Lorem ipsum",
      description: "Dominium",
      price: 6,
      currency: "$",
      action: "Buy",
      adjustImageHeight: true
    },
    {
      imageLink: "/assets/img/product_2.jpg",
      category: "WINE",
      title: "Lorem ipsum",
      description: "Dominium",
      price: 6,
      currency: "$",
      action: "Buy",
      adjustImageHeight: true
    }
  ];

  protected productList2 = [
    {
      imageLink: "/assets/img/product_3.jpg",
      category: "EVENT",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consectetur. Ut viverra lorem fermentum augue sagittis.",
      price: 6,
      currency: "$",
      action: "Details",
      adjustImageHeight: true
    }
  ];

  protected recommendationList = [
    {
      type: "WINE TASTING",
      name: "CELLAR",
      location: "Austria, Wien",
      rate: 4.9,
      totalReactions: 12,
      price: 5,
      currency: '$'
    }
  ];

  protected recommendationList2 = [
    {
      type: "WINE TASTING",
      name: "CELLAR",
      location: "Austria, Wien",
      rate: 4.9,
      totalReactions: 12,
      price: 5,
      currency: '$'
    },
    {
      type: "WINE TASTING",
      name: "CELLAR2",
      location: "Austria, Wien",
      rate: 4.9,
      totalReactions: 12,
      price: 5,
      currency: '$'
    }
  ];

  protected userData = {
    imageLink: "/assets/img/person_2.jpeg",
    name: "Lurch Schpellchek",
    date: "Augusztus 06.",
    time: "8 min.",
    chips: [
      "finibus molestie justo",
      "malesuada",
      "ornare vestibulum ipsum"
    ]
  }
}
