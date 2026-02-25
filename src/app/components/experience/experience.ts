import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { experienceItems } from '../../cv-data';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  items = experienceItems;
}
