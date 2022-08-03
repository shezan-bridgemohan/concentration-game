import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  @Input() player1Name: string = '';
  @Input() player2Name: string = '';

  readonly playingCards = [
    {
      "suite": "clubs",
      "value": "A",
      "img": "../../assets/img/cards/clubs-A.png"
    },
    {
      "suite": "clubs",
      "value": "2",
      "img": "../../assets/img/cards/clubs-2.png"
    },
    {
      "suite": "clubs",
      "value": "3",
      "img": "../../assets/img/cards/clubs-3.png"
    },
    {
      "suite": "clubs",
      "value": "4",
      "img": "../../assets/img/cards/clubs-4.png"
    },
    {
      "suite": "clubs",
      "value": "5",
      "img": "../../assets/img/cards/clubs-5.png"
    },
    {
      "suite": "clubs",
      "value": "6",
      "img": "../../assets/img/cards/clubs-6.png"
    },
    {
      "suite": "clubs",
      "value": "7",
      "img": "../../assets/img/cards/clubs-7.png"
    },
    {
      "suite": "clubs",
      "value": "8",
      "img": "../../assets/img/cards/clubs-8.png"
    },
    {
      "suite": "clubs",
      "value": "9",
      "img": "../../assets/img/cards/clubs-9.png"
    },
    {
      "suite": "clubs",
      "value": "10",
      "img": "../../assets/img/cards/clubs-10.png"
    },
    {
      "suite": "clubs",
      "value": "J",
      "img": "../../assets/img/cards/clubs-J.png"
    },
    {
      "suite": "clubs",
      "value": "Q",
      "img": "../../assets/img/cards/clubs-Q.png"
    },
    {
      "suite": "clubs",
      "value": "K",
      "img": "../../assets/img/cards/clubs-K.png"
    },
    {
      "suite": "diamonds",
      "value": "A",
      "img": "../../assets/img/cards/diamonds-A.png"
    },
    {
      "suite": "diamonds",
      "value": "2",
      "img": "../../assets/img/cards/diamonds-2.png"
    },
    {
      "suite": "diamonds",
      "value": "3",
      "img": "../../assets/img/cards/diamonds-3.png"
    },
    {
      "suite": "diamonds",
      "value": "4",
      "img": "../../assets/img/cards/diamonds-4.png"
    },
    {
      "suite": "diamonds",
      "value": "5",
      "img": "../../assets/img/cards/diamonds-5.png"
    },
    {
      "suite": "diamonds",
      "value": "6",
      "img": "../../assets/img/cards/diamonds-6.png"
    },
    {
      "suite": "diamonds",
      "value": "7",
      "img": "../../assets/img/cards/diamonds-7.png"
    },
    {
      "suite": "diamonds",
      "value": "8",
      "img": "../../assets/img/cards/diamonds-8.png"
    },
    {
      "suite": "diamonds",
      "value": "9",
      "img": "../../assets/img/cards/diamonds-9.png"
    },
    {
      "suite": "diamonds",
      "value": "10",
      "img": "../../assets/img/cards/diamonds-10.png"
    },
    {
      "suite": "diamonds",
      "value": "J",
      "img": "../../assets/img/cards/diamonds-J.png"
    },
    {
      "suite": "diamonds",
      "value": "Q",
      "img": "../../assets/img/cards/diamonds-Q.png"
    },
    {
      "suite": "diamonds",
      "value": "K",
      "img": "../../assets/img/cards/diamonds-K.png"
    },
    {
      "suite": "hearts",
      "value": "A",
      "img": "../../assets/img/cards/hearts-A.png"
    },
    {
      "suite": "hearts",
      "value": "2",
      "img": "../../assets/img/cards/hearts-2.png"
    },
    {
      "suite": "hearts",
      "value": "3",
      "img": "../../assets/img/cards/hearts-3.png"
    },
    {
      "suite": "hearts",
      "value": "4",
      "img": "../../assets/img/cards/hearts-4.png"
    },
    {
      "suite": "hearts",
      "value": "5",
      "img": "../../assets/img/cards/hearts-5.png"
    },
    {
      "suite": "hearts",
      "value": "6",
      "img": "../../assets/img/cards/hearts-6.png"
    },
    {
      "suite": "hearts",
      "value": "7",
      "img": "../../assets/img/cards/hearts-7.png"
    },
    {
      "suite": "hearts",
      "value": "8",
      "img": "../../assets/img/cards/hearts-8.png"
    },
    {
      "suite": "hearts",
      "value": "9",
      "img": "../../assets/img/cards/hearts-9.png"
    },
    {
      "suite": "hearts",
      "value": "10",
      "img": "../../assets/img/cards/hearts-10.png"
    },
    {
      "suite": "hearts",
      "value": "J",
      "img": "../../assets/img/cards/hearts-J.png"
    },
    {
      "suite": "hearts",
      "value": "Q",
      "img": "../../assets/img/cards/hearts-Q.png"
    },
    {
      "suite": "hearts",
      "value": "K",
      "img": "../../assets/img/cards/hearts-K.png"
    },
    {
      "suite": "spades",
      "value": "A",
      "img": "../../assets/img/cards/spades-A.png"
    },
    {
      "suite": "spades",
      "value": "2",
      "img": "../../assets/img/cards/spades-2.png"
    },
    {
      "suite": "spades",
      "value": "3",
      "img": "../../assets/img/cards/spades-3.png"
    },
    {
      "suite": "spades",
      "value": "4",
      "img": "../../assets/img/cards/spades-4.png"
    },
    {
      "suite": "spades",
      "value": "5",
      "img": "../../assets/img/cards/spades-5.png"
    },
    {
      "suite": "spades",
      "value": "6",
      "img": "../../assets/img/cards/spades-6.png"
    },
    {
      "suite": "spades",
      "value": "7",
      "img": "../../assets/img/cards/spades-7.png"
    },
    {
      "suite": "spades",
      "value": "8",
      "img": "../../assets/img/cards/spades-8.png"
    },
    {
      "suite": "spades",
      "value": "9",
      "img": "../../assets/img/cards/spades-9.png"
    },
    {
      "suite": "spades",
      "value": "10",
      "img": "../../assets/img/cards/spades-10.png"
    },
    {
      "suite": "spades",
      "value": "J",
      "img": "../../assets/img/cards/spades-J.png"
    },
    {
      "suite": "spades",
      "value": "Q",
      "img": "../../assets/img/cards/spades-Q.png"
    },
    {
      "suite": "spades",
      "value": "K",
      "img": "../../assets/img/cards/spades-K.png"
    },
    {
      "suite": "joker",
      "value": "joker",
      "img": "../../assets/img/cards/joker-red.png"
    },
    {
      "suite": "joker",
      "value": "joker",
      "img": "../../assets/img/cards/joker-black.png"
    },
  ];

  clicked: boolean = false;

  cardClick(): void {
    this.clicked = !this.clicked;
  }

  constructor() { }

  ngOnInit() {
  }

shuffle(array) {
  let currentIndex = array.length, randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

shuffledCards = this.shuffle(this.playingCards);


}
