import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  protected articleList = [
    {
      imageLink: "/assets/img/person_1.png",
      name: "Linguina Nettlewater",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consect. Ut viverra lorem fermentum augue.",
      category: "EVENT",
      date: "Augusztus 03.",
      time: "6 min"
    },
    {
      imageLink: "/assets/img/person_2.jpeg",
      name: "Bartholomew Shoe",
      title: "Volutpat congue ut aenean ut varius suscipit ut sed. Id velit mauris viverra mauris arcu tincidunt tellus ipsum.",
      description: "Lorem ipsum dolor sit amet consect. Ut viverra lorem fermentum augue.",
      category: "Gasztro",
      date: "Augusztus 03.",
      time: "4 min"
    },
    {
      imageLink: null,
      name: "Gordon Norman",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description: "Lorem ipsum dolor sit amet consect. Ut viverra lorem fermentum augue.",
      category: "TRAVEL",
      date: "Júlis 30.",
      time: "9 min"
    },
    {
      imageLink: "/assets/img/person_2.jpeg",
      name: "Bartholomew Shoe",
      title: "Volutpat congue ut aenean ut varius suscipit ut sed. Id velit mauris viverra mauris arcu tincidunt tellus ipsum.",
      description: "Lorem ipsum dolor sit amet consect. Ut viverra lorem fermentum augue.",
      category: "Gasztro",
      date: "Augusztus 03.",
      time: "4 min"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
