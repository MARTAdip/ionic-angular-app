import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipiesService } from './recipies.service';
@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.page.html',
  styleUrls: ['./recepies.page.scss'],
})
export class RecepiesPage implements OnInit {
  recipes: Recipe[]
  constructor(private recipiesService: RecipiesService ) { }

  ngOnInit() {
    this.recipes = this.recipiesService.getAllRecipies();
  }

}

