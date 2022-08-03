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
      suite: "clubs",
      value: "A",
      id: "clubs-A",
      img: "../../assets/img/cards/clubs-A.png"
    },
    {
      suite: "clubs",
      value: "2",
      id: "clubs-2",
      img: "../../assets/img/cards/clubs-2.png"
    },
    {
      suite: "clubs",
      value: "3",
      id: "clubs-3",
      img: "../../assets/img/cards/clubs-3.png"
    },
    {
      suite: "clubs",
      value: "4",
      id: "clubs-4",
      img: "../../assets/img/cards/clubs-4.png"
    },
    {
      suite: "clubs",
      value: "5",
      id: "clubs-5",
      img: "../../assets/img/cards/clubs-5.png"
    },
    {
      suite: "clubs",
      value: "6",
      id: "clubs-6",
      img: "../../assets/img/cards/clubs-6.png"
    },
    {
      suite: "clubs",
      value: "7",
      id: "clubs-7",
      img: "../../assets/img/cards/clubs-7.png"
    },
    {
      suite: "clubs",
      value: "8",
      id: "clubs-8",
      img: "../../assets/img/cards/clubs-8.png"
    },
    {
      suite: "clubs",
      value: "9",
      id: "clubs-9",
      img: "../../assets/img/cards/clubs-9.png"
    },
    {
      suite: "clubs",
      value: "10",
      id: "clubs-10",
      img: "../../assets/img/cards/clubs-10.png"
    },
    {
      suite: "clubs",
      value: "J",
      id: "clubs-J",
      img: "../../assets/img/cards/clubs-J.png"
    },
    {
      suite: "clubs",
      value: "Q",
      id: "clubs-Q",
      img: "../../assets/img/cards/clubs-Q.png"
    },
    {
      suite: "clubs",
      value: "K",
      id: "clubs-K",
      img: "../../assets/img/cards/clubs-K.png"
    },
    {
      suite: "diamonds",
      value: "A",
      id: "diamonds-A",
      img: "../../assets/img/cards/diamonds-A.png"
    },
    {
      suite: "diamonds",
      value: "2",
      id: "diamonds-2",
      img: "../../assets/img/cards/diamonds-2.png"
    },
    {
      suite: "diamonds",
      value: "3",
      id: "diamonds-3",
      img: "../../assets/img/cards/diamonds-3.png"
    },
    {
      suite: "diamonds",
      value: "4",
      id: "diamonds-4",
      img: "../../assets/img/cards/diamonds-4.png"
    },
    {
      suite: "diamonds",
      value: "5",
      id: "diamonds-5",
      img: "../../assets/img/cards/diamonds-5.png"
    },
    {
      suite: "diamonds",
      value: "6",
      id: "diamonds-6",
      img: "../../assets/img/cards/diamonds-6.png"
    },
    {
      suite: "diamonds",
      value: "7",
      id: "diamonds-7",
      img: "../../assets/img/cards/diamonds-7.png"
    },
    {
      suite: "diamonds",
      value: "8",
      id: "diamonds-8",
      img: "../../assets/img/cards/diamonds-8.png"
    },
    {
      suite: "diamonds",
      value: "9",
      id: "diamonds-9",
      img: "../../assets/img/cards/diamonds-9.png"
    },
    {
      suite: "diamonds",
      value: "10",
      id: "diamonds-10",
      img: "../../assets/img/cards/diamonds-10.png"
    },
    {
      suite: "diamonds",
      value: "J",
      id: "diamonds-J",
      img: "../../assets/img/cards/diamonds-J.png"
    },
    {
      suite: "diamonds",
      value: "Q",
      id: "diamonds-Q",
      img: "../../assets/img/cards/diamonds-Q.png"
    },
    {
      suite: "diamonds",
      value: "K",
      id: "diamonds-K",
      img: "../../assets/img/cards/diamonds-K.png"
    },
    {
      suite: "hearts",
      value: "A",
      id: "hearts-A",
      img: "../../assets/img/cards/hearts-A.png"
    },
    {
      suite: "hearts",
      value: "2",
      id: "hearts-2",
      img: "../../assets/img/cards/hearts-2.png"
    },
    {
      suite: "hearts",
      value: "3",
      id: "hearts-3",
      img: "../../assets/img/cards/hearts-3.png"
    },
    {
      suite: "hearts",
      value: "4",
      id: "hearts-4",
      img: "../../assets/img/cards/hearts-4.png"
    },
    {
      suite: "hearts",
      value: "5",
      id: "hearts-5",
      img: "../../assets/img/cards/hearts-5.png"
    },
    {
      suite: "hearts",
      value: "6",
      id: "hearts-6",
      img: "../../assets/img/cards/hearts-6.png"
    },
    {
      suite: "hearts",
      value: "7",
      id: "hearts-7",
      img: "../../assets/img/cards/hearts-7.png"
    },
    {
      suite: "hearts",
      value: "8",
      id: "hearts-8",
      img: "../../assets/img/cards/hearts-8.png"
    },
    {
      suite: "hearts",
      value: "9",
      id: "hearts-9",
      img: "../../assets/img/cards/hearts-9.png"
    },
    {
      suite: "hearts",
      value: "10",
      id: "hearts-10",
      img: "../../assets/img/cards/hearts-10.png"
    },
    {
      suite: "hearts",
      value: "J",
      id: "hearts-J",
      img: "../../assets/img/cards/hearts-J.png"
    },
    {
      suite: "hearts",
      value: "Q",
      id: "hearts-Q",
      img: "../../assets/img/cards/hearts-Q.png"
    },
    {
      suite: "hearts",
      value: "K",
      id: "hearts-K",
      img: "../../assets/img/cards/hearts-K.png"
    },
    {
      suite: "spades",
      value: "A",
      id: "spades-A",
      img: "../../assets/img/cards/spades-A.png"
    },
    {
      suite: "spades",
      value: "2",
      id: "spades-2",
      img: "../../assets/img/cards/spades-2.png"
    },
    {
      suite: "spades",
      value: "3",
      id: "spades-3",
      img: "../../assets/img/cards/spades-3.png"
    },
    {
      suite: "spades",
      value: "4",
      id: "spades-4",
      img: "../../assets/img/cards/spades-4.png"
    },
    {
      suite: "spades",
      value: "5",
      id: "spades-5",
      img: "../../assets/img/cards/spades-5.png"
    },
    {
      suite: "spades",
      value: "6",
      id: "spades-6",
      img: "../../assets/img/cards/spades-6.png"
    },
    {
      suite: "spades",
      value: "7",
      id: "spades-7",
      img: "../../assets/img/cards/spades-7.png"
    },
    {
      suite: "spades",
      value: "8",
      id: "spades-8",
      img: "../../assets/img/cards/spades-8.png"
    },
    {
      suite: "spades",
      value: "9",
      id: "spades-9",
      img: "../../assets/img/cards/spades-9.png"
    },
    {
      suite: "spades",
      value: "10",
      id: "spades-10",
      img: "../../assets/img/cards/spades-10.png"
    },
    {
      suite: "spades",
      value: "J",
      id: "spades-J",
      img: "../../assets/img/cards/spades-J.png"
    },
    {
      suite: "spades",
      value: "Q",
      id: "spades-Q",
      img: "../../assets/img/cards/spades-Q.png"
    },
    {
      suite: "spades",
      value: "K",
      id: "spades-K",
      img: "../../assets/img/cards/spades-K.png"
    },
    {
      suite: "red",
      value: "joker",
      id: "red-joker",
      img: "../../assets/img/cards/joker-red.png"
    },
    {
      suite: "black",
      value: "joker",
      id: "black-joker",
      img: "../../assets/img/cards/joker-black.png"
    },
  ];

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

  clicked: boolean = false;
  clickCount: number = 0;
  flipped: boolean = false;
  playerTurn: boolean = true;

  cardClick(id) {
    document.getElementById(id).classList.remove('card-img-back');

    if (this.clickCount < 1) {
      return this.clickCount++;
    }
    else if (this.clickCount = 2) {
      this.clicked = !this.clicked;
      this.playerTurn = !this.playerTurn;
      return this.clickCount = 0;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
