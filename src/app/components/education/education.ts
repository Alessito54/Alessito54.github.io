import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { educationItems } from '../../cv-data';

@Component({
  selector: 'app-education',
  imports: [NgFor, NgIf],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  items = educationItems;
}
