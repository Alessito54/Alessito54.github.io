import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { skillCategories } from '../../cv-data';

@Component({
  selector: 'app-skills',
  imports: [NgFor],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  categories = skillCategories;
}
