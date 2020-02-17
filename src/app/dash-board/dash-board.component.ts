import { Component, OnInit } from '@angular/core';
import {AppService} from "../app.service";
import {Router} from '@angular/router';
@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  showFiller = false;
  iconArray:string[]; 
  selectedValue:string;
  constructor(private router: Router, public appService: AppService) {
    this.selectedValue = 'Dashboard';
   }

  ngOnInit() {
    this.iconArray = ["dashboard","search","account_circle","work","calendar_today","insert_drive_file","message","build"] 
  }

  signOut() {
      this.router.navigate(['/SignIn']);
  }

  menuItems(value) {

    this.selectedValue = value;

  }

}
