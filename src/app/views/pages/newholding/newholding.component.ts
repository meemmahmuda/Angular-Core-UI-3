import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule

@Component({
  selector: 'app-newholding',
  standalone: true, // ✅ If this is a standalone component
  imports: [CommonModule], // ✅ Register CommonModule here
  templateUrl: './newholding.component.html',
  styleUrl: './newholding.component.scss'
})
export class NewholdingComponent {
  
    isOpen = {
      zone1:    false,
      ward1:    false,
      sector1:  false,
      area1:    false,
      zone2:    false,
      ward2:    false,
      sector2:  false,
      area2:    false,
      zone3:    false,
      ward3:    false,
      sector3:  false,
      area3:    false
    };
  
    toggle(section: keyof typeof this.isOpen) {
      this.isOpen[section] = !this.isOpen[section];
    }
  }