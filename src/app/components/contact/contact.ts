import { Component } from '@angular/core';
import { personalInfo } from '../../cv-data';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  info = personalInfo;
}
