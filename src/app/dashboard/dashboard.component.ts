import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  userName;
  constructor() { }

  ngOnInit(): void {
    this.userName=sessionStorage.getItem("un");
  }
  }

