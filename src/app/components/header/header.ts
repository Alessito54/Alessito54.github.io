import { Component } from '@angular/core';
import { personalInfo } from '../../cv-data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  info = personalInfo;
}
