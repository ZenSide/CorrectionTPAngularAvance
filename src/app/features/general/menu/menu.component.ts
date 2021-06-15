import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../service/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  get isConnected(){
    return this.authService.isConnected;
  }

  logout(){
    this.authService.logout();
  }


}
