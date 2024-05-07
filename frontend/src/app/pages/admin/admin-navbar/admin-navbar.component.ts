import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category/category.service';
import { CategoryItem } from '../../../models/category-item';
import { TokenService } from '../../../services/token/token.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-admin-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admin-navbar.component.html',
  styleUrl: './admin-navbar.component.css'
})
export class AdminNavbarComponent {
  logout_uri = environment.auth_server_uri + '/logout';
  constructor(private tokenService: TokenService){}

  onLogout(): void {
    this.tokenService.clear();
    location.href = this.logout_uri;
  }

}
