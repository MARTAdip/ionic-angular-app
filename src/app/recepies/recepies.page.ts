import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Lasagna',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Lasagna_romagnola.jpg/1200px-Lasagna_romagnola.jpg',
      ingredients: ['Egg Pasta', 'Meat', 'Besciamella', 'Parmigiano']
    },
    {
      id: 'r2',
      title: 'Pappa al Pomodoro',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pappa_al_pomodoro_01.jpg/1200px-Pappa_al_pomodoro_01.jpg',
      ingredients: ['Dry Bread', 'Fresh Tomatoes', 'Basil']
    },
    {
      id: 'r3',
      title: 'Zuppa di Fagioli',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Annibale_Carracci_-_The_Beaneater_-_WGA04408.jpg',
      ingredients: ['Beans', 'Tomato Souce', 'Garlic', 'Onion', 'Sellery']
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}

