import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  player1Name: string = '';
  player2Name: string = '';

  getPlayerNames() {
    alert("Welcome " + this.player1Name + " & " + this.player2Name);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
