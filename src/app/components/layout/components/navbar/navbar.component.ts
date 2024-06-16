import {Component, signal} from '@angular/core';
import {MatIconButton} from "@angular/material/button";
import {MatBadge} from "@angular/material/badge";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatIconButton,
    MatBadge,
    MatRipple
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public isLoggedIn = signal<boolean>(false);

}
