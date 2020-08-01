import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  seeds : any;
  farmers : any;
  
  constructor() {
    this.farmers = [{
      name: 'AAA',
      location: 'Vidyanagar, Bangalore',
      seeds: 130
    },{
      name: 'AAA',
      location: 'Vidyagiri, Bangalore',
      seeds: 120
    },{
      name: 'AAA',
      location: 'Vijyanagar, Bangalore',
      seeds: 140
    },{
      name: 'AAA',
      location: 'Vidyanagar, Bangalore',
      seeds: 130
    },{
      name: 'AAA',
      location: 'Vidyagiri, Bangalore',
      seeds: 120
    },{
      name: 'AAA',
      location: 'Vijyanagar, Bangalore',
      seeds: 140
    },{
      name: 'AAA',
      location: 'Vidyanagar, Bangalore',
      seeds: 130
    },{
      name: 'AAA',
      location: 'Vidyagiri, Bangalore',
      seeds: 120
    },{
      name: 'AAA',
      location: 'Vijyanagar, Bangalore',
      seeds: 140
    }]
    this.seeds = [{
      name : 'black-sesame',
      image : 'https://image.shutterstock.com/image-photo/black-sesame-seeds-wooden-spoon-260nw-1421348225.jpg'
    },{
      name : 'black-sesame',
      image : 'https://image.shutterstock.com/image-photo/black-sesame-seeds-wooden-spoon-260nw-1421348225.jpg'
    },{
      name : 'black-sesame',
      image : 'https://image.shutterstock.com/image-photo/black-sesame-seeds-wooden-spoon-260nw-1421348225.jpg'
    },{
      name : 'black-sesame',
      image : 'https://image.shutterstock.com/image-photo/black-sesame-seeds-wooden-spoon-260nw-1421348225.jpg'
    }]
   }

  ngOnInit(): void {
  }

}
