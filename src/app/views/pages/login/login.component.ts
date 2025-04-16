import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';
import { RouterModule } from '@angular/router';
import { FormModule } from '@coreui/angular';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle, RouterModule, FormsModule, CommonModule]
})
export class LoginComponent {

  selectedWing = '';
  selectedSection = '';

  onWingChange() {
    // Automatically select the corresponding section when Wing is selected
    if (this.selectedWing === 'holding') {
      this.selectedSection = 'holding';
    } else if (this.selectedWing === 'hotel') {
      this.selectedSection = 'hotel';  
    } else if (this.selectedWing === '') {
      this.selectedSection = '';  
    } else if (this.selectedWing === 'market') {
      this.selectedSection = 'market'; 
    } else {
      this.selectedSection = '';  // Reset the section if no valid wing is selected
    }
  }
}


