import { Component, OnInit } from '@angular/core';
import { Directory } from '../directory.model';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  directories: Directory[] = [
    new Directory('Bruce Wayne', 'i_am_batman@wayne.com', 'https://vignette.wikia.nocookie.net/batman/images/8/8f/Christian_Bale_as_The_Dark_Knight.jpg/revision/latest/scale-to-width-down/250?cb=20140208170841'),
    new Directory('Clark Kent', 'itMeansHope@dailyplanet.com', 'http://image.techtimes.com/data/images/full/274624/superman.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
