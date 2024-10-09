import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {MatCard} from '@angular/material/card';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-preferences-form',
  standalone: true,
  imports: [
    FormsModule,
    MatCard,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    MatLabel
  ],
  templateUrl: './preferences-form.component.html',
  styleUrl: './preferences-form.component.css'
})
export class PreferencesFormComponent {
  players: number = 1;
  categories: string[] = [];
  time: number = 0;

  constructor(private router: Router) {}

  onSubmit() {
    localStorage.setItem('players', this.players.toString());
    localStorage.setItem('categories', JSON.stringify(this.categories));
    localStorage.setItem('time', this.time.toString());

    this.router.navigate(['/wheelspin']);
  }
}
