import { Component } from '@angular/core';
import {NgForOf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-spinning-wheel',
  standalone: true,
  templateUrl: './spinning-wheel.component.html',
  imports: [
    NgStyle,
    NgForOf
  ],
  styleUrl: './spinning-wheel.component.css'
})
export class SpinningWheelComponent {
  themes = ['Mario', 'Zelda', 'Metroid', 'Donkey Kong', 'Pokemon', 'Kirby', 'Star Fox', 'Animal Crossing'];
  rotationDegrees = 0;

  spinWheel() {
    const randomSpin = Math.floor(Math.random() * 360) + 1440; // Spin between 1440 and 1800 degrees
    this.rotationDegrees += randomSpin;
  }

  getSegmentStyle(index: number) {
    const numSegments = this.themes.length;
    const rotation = (360 / numSegments) * index;
    const bgColor = index % 2 === 0 ? '#f00' : '#fff'; // Alternate red and white colors
    return {
      transform: `rotate(${rotation}deg)`,
      backgroundColor: bgColor
    };
  }
}
