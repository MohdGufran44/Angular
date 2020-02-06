import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Good Test Recipe', 'This is simply a test', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg'),
    new Recipe('spicy Test Recipe', 'This is spicy a test', 'https://p0.pxfuel.com/preview/852/655/759/quinoa-seeds-proper-nutrition-a-healthy-lifestyle.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
