import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SpinningWheelComponent} from './pages/spinning-wheel/spinning-wheel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinningWheelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SpinTendo';
}
