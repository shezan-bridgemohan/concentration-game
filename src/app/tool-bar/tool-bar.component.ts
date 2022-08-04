import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

  constructor() { }

  resetPlayers() {
    localStorage.removeItem("player1");
    localStorage.removeItem("player2");
  }

  ngOnInit(): void {
  }

}
