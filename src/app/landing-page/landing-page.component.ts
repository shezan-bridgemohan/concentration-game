import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  constructor() { }

  player1Name: string = '';
  player2Name: string = '';

  getPlayerNames() {
    // Store
    localStorage.setItem("player1", this.player1Name);
    localStorage.setItem("player2", this.player2Name);
    // Retrieve
    alert("Welcome " + localStorage.getItem("player1") + " & " + localStorage.getItem("player2"));
  }

  ngOnInit(): void {
  }
}
