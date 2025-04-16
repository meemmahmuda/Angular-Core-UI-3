// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-forgetpass',
//   imports: [],
//   templateUrl: './forgetpass.component.html',
//   styleUrl: './forgetpass.component.scss'
// })
// export class ForgetpassComponent {

// }


import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import {
  ContainerComponent,
  RowComponent,
  ColComponent,
  CardComponent,
  CardGroupComponent, // ✅ add this
  CardBodyComponent,
  TextColorDirective,
  FormDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormControlDirective,
  ButtonDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss'],
  standalone: true,
  imports: [
    ContainerComponent,
    RowComponent,
    ColComponent,
    CardComponent,
    CardGroupComponent, // ✅ ensure this is added
    CardBodyComponent,
    TextColorDirective,
    FormDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    IconDirective,
    FormControlDirective,
    ButtonDirective,
    NgStyle,
    RouterModule
  ]
})

export class ForgetpassComponent {
  
}

