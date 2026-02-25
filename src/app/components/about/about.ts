import { Component } from '@angular/core';
import { personalInfo } from '../../cv-data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  info = personalInfo;
}
