import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  rest$: Menu[];

  constructor(private data: DataService) {
  }

  ngOnInit() {
    this.data.getMenus().subscribe(menus => {
        this.rest$ = menus;
        console.log('XXX ' + this.rest$);
      }
    );


  }
}


export interface Menu {
  restaurant: string;
  meals: Meal[];
}

export interface Meal {
  price: string;
  weigth: string;
  name: string;
}
