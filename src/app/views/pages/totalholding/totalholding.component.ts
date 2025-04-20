import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-totalholding',
  standalone: true, // ✅ If this is a standalone component
  imports: [CommonModule], // ✅ Register CommonModule here
  templateUrl: './totalholding.component.html',
  styleUrls: ['./totalholding.component.scss']
})
export class TotalholdingComponent {
  isOpen = {
    zone: false,
    ward: false,
    sector: false,
    area: false
  };

  toggle(section: keyof typeof this.isOpen) {
    this.isOpen[section] = !this.isOpen[section];
  }
}
