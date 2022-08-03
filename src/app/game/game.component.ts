import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../models/card.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  @Input() player1Name: string = 'Shiz';
  @Input() player2Name: string = 'Jeri';

  player1Score: number = 0;
  player2Score: number = 0;


  clicked: boolean = false;
  clickCount: number = 0;
  player1Turn: boolean = true;

  SelectedCard1: Card = {
    id: '',
    value: '',
    color: ''
  };

  SelectedCard2: Card = {
    id: '',
    value: '',
    color: ''
  };

  flipCards(): void {
    document.getElementById(this.SelectedCard1.id).classList.add('card-img-back'); //Flip unmatched card 1
    document.getElementById(this.SelectedCard2.id).classList.add('card-img-back'); //Flip unmatched card 2
  }

  whosTurn(): void {
    if (this.clickCount == 0) {
      this.flipCards();
    }
  }

  reset(): void {
    this.SelectedCard1.id = '';
    this.SelectedCard1.value = '';
    this.SelectedCard1.color = '';
    this.SelectedCard2.id = '';
    this.SelectedCard2.value = '';
    this.SelectedCard2.color = '';
  }

  readonly playingCards = [
    {
      suite: "clubs",
      value: "A",
      color: "black",
      id: "Clubs Ace",
      img: "../../assets/img/cards/clubs-A.png"
    },
    {
      suite: "clubs",
      value: "2",
      color: "black",
      id: "Clubs 2",
      img: "../../assets/img/cards/clubs-2.png"
    },
    {
      suite: "clubs",
      value: "3",
      color: "black",
      id: "Clubs 3",
      img: "../../assets/img/cards/clubs-3.png"
    },
    {
      suite: "clubs",
      value: "4",
      color: "black",
      id: "Clubs 4",
      img: "../../assets/img/cards/clubs-4.png"
    },
    {
      suite: "clubs",
      value: "5",
      color: "black",
      id: "Clubs 5",
      img: "../../assets/img/cards/clubs-5.png"
    },
    {
      suite: "clubs",
      value: "6",
      color: "black",
      id: "Clubs 6",
      img: "../../assets/img/cards/clubs-6.png"
    },
    {
      suite: "clubs",
      value: "7",
      color: "black",
      id: "Clubs 7",
      img: "../../assets/img/cards/clubs-7.png"
    },
    {
      suite: "clubs",
      value: "8",
      color: "black",
      id: "Clubs 8",
      img: "../../assets/img/cards/clubs-8.png"
    },
    {
      suite: "clubs",
      value: "9",
      color: "black",
      id: "Clubs 9",
      img: "../../assets/img/cards/clubs-9.png"
    },
    {
      suite: "clubs",
      value: "10",
      color: "black",
      id: "Clubs 10",
      img: "../../assets/img/cards/clubs-10.png"
    },
    {
      suite: "clubs",
      value: "J",
      color: "black",
      id: "Clubs Jack",
      img: "../../assets/img/cards/clubs-J.png"
    },
    {
      suite: "clubs",
      value: "Q",
      color: "black",
      id: "Clubs Queen",
      img: "../../assets/img/cards/clubs-Q.png"
    },
    {
      suite: "clubs",
      value: "K",
      color: "black",
      id: "Clubs King",
      img: "../../assets/img/cards/clubs-K.png"
    },
    {
      suite: "diamonds",
      value: "A",
      color: "red",
      id: "Diamonds Ace",
      img: "../../assets/img/cards/diamonds-A.png"
    },
    {
      suite: "diamonds",
      value: "2",
      color: "red",
      id: "Diamonds 2",
      img: "../../assets/img/cards/diamonds-2.png"
    },
    {
      suite: "diamonds",
      value: "3",
      color: "red",
      id: "Diamonds 3",
      img: "../../assets/img/cards/diamonds-3.png"
    },
    {
      suite: "diamonds",
      value: "4",
      color: "red",
      id: "Diamonds 4",
      img: "../../assets/img/cards/diamonds-4.png"
    },
    {
      suite: "diamonds",
      value: "5",
      color: "red",
      id: "Diamonds 5",
      img: "../../assets/img/cards/diamonds-5.png"
    },
    {
      suite: "diamonds",
      value: "6",
      color: "red",
      id: "Diamonds 6",
      img: "../../assets/img/cards/diamonds-6.png"
    },
    {
      suite: "diamonds",
      value: "7",
      color: "red",
      id: "Diamonds 7",
      img: "../../assets/img/cards/diamonds-7.png"
    },
    {
      suite: "diamonds",
      value: "8",
      color: "red",
      id: "Diamonds 8",
      img: "../../assets/img/cards/diamonds-8.png"
    },
    {
      suite: "diamonds",
      value: "9",
      color: "red",
      id: "Diamonds 9",
      img: "../../assets/img/cards/diamonds-9.png"
    },
    {
      suite: "diamonds",
      value: "10",
      color: "red",
      id: "Diamonds 10",
      img: "../../assets/img/cards/diamonds-10.png"
    },
    {
      suite: "diamonds",
      value: "J",
      color: "red",
      id: "Diamonds Jack",
      img: "../../assets/img/cards/diamonds-J.png"
    },
    {
      suite: "diamonds",
      value: "Q",
      color: "red",
      id: "Diamonds Queen",
      img: "../../assets/img/cards/diamonds-Q.png"
    },
    {
      suite: "diamonds",
      value: "K",
      color: "red",
      id: "Diamonds King",
      img: "../../assets/img/cards/diamonds-K.png"
    },
    {
      suite: "hearts",
      value: "A",
      color: "red",
      id: "Hearts Ace",
      img: "../../assets/img/cards/hearts-A.png"
    },
    {
      suite: "hearts",
      value: "2",
      color: "red",
      id: "Hearts 2",
      img: "../../assets/img/cards/hearts-2.png"
    },
    {
      suite: "hearts",
      value: "3",
      color: "red",
      id: "Hearts 3",
      img: "../../assets/img/cards/hearts-3.png"
    },
    {
      suite: "hearts",
      value: "4",
      color: "red",
      id: "Hearts 4",
      img: "../../assets/img/cards/hearts-4.png"
    },
    {
      suite: "hearts",
      value: "5",
      color: "red",
      id: "Hearts 5",
      img: "../../assets/img/cards/hearts-5.png"
    },
    {
      suite: "hearts",
      value: "6",
      color: "red",
      id: "Hearts 6",
      img: "../../assets/img/cards/hearts-6.png"
    },
    {
      suite: "hearts",
      value: "7",
      color: "red",
      id: "Hearts 7",
      img: "../../assets/img/cards/hearts-7.png"
    },
    {
      suite: "hearts",
      value: "8",
      color: "red",
      id: "Hearts 8",
      img: "../../assets/img/cards/hearts-8.png"
    },
    {
      suite: "hearts",
      value: "9",
      color: "red",
      id: "Hearts 9",
      img: "../../assets/img/cards/hearts-9.png"
    },
    {
      suite: "hearts",
      value: "10",
      color: "red",
      id: "Hearts 10",
      img: "../../assets/img/cards/hearts-10.png"
    },
    {
      suite: "hearts",
      value: "J",
      color: "red",
      id: "Hearts Jack",
      img: "../../assets/img/cards/hearts-J.png"
    },
    {
      suite: "hearts",
      value: "Q",
      color: "red",
      id: "Hearts Queen",
      img: "../../assets/img/cards/hearts-Q.png"
    },
    {
      suite: "hearts",
      value: "K",
      color: "red",
      id: "Hearts King",
      img: "../../assets/img/cards/hearts-K.png"
    },
    {
      suite: "spades",
      value: "A",
      color: "black",
      id: "Spades Ace",
      img: "../../assets/img/cards/spades-A.png"
    },
    {
      suite: "spades",
      value: "2",
      color: "black",
      id: "Spades 2",
      img: "../../assets/img/cards/spades-2.png"
    },
    {
      suite: "spades",
      value: "3",
      color: "black",
      id: "Spades 3",
      img: "../../assets/img/cards/spades-3.png"
    },
    {
      suite: "spades",
      value: "4",
      color: "black",
      id: "Spades 4",
      img: "../../assets/img/cards/spades-4.png"
    },
    {
      suite: "spades",
      value: "5",
      color: "black",
      id: "Spades 5",
      img: "../../assets/img/cards/spades-5.png"
    },
    {
      suite: "spades",
      value: "6",
      color: "black",
      id: "Spades 6",
      img: "../../assets/img/cards/spades-6.png"
    },
    {
      suite: "spades",
      value: "7",
      color: "black",
      id: "Spades 7",
      img: "../../assets/img/cards/spades-7.png"
    },
    {
      suite: "spades",
      value: "8",
      color: "black",
      id: "Spades 8",
      img: "../../assets/img/cards/spades-8.png"
    },
    {
      suite: "spades",
      value: "9",
      color: "black",
      id: "Spades 9",
      img: "../../assets/img/cards/spades-9.png"
    },
    {
      suite: "spades",
      value: "10",
      color: "black",
      id: "Spades 10",
      img: "../../assets/img/cards/spades-10.png"
    },
    {
      suite: "spades",
      value: "J",
      color: "black",
      id: "Spades Jack",
      img: "../../assets/img/cards/spades-J.png"
    },
    {
      suite: "spades",
      value: "Q",
      color: "black",
      id: "Spades Queen",
      img: "../../assets/img/cards/spades-Q.png"
    },
    {
      suite: "spades",
      value: "K",
      color: "black",
      id: "Spades King",
      img: "../../assets/img/cards/spades-K.png"
    },
    {
      suite: "red",
      value: "joker",
      color: "joker",
      id: "red-joker",
      img: "../../assets/img/cards/joker-red.png"
    },
    {
      suite: "black",
      value: "joker",
      color: "joker",
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

  cardClick(id, value, color) {
    document.getElementById(id).classList.add('flip-horizontal-bottom');
    setTimeout(() => { document.getElementById(id).classList.remove('card-img-back'); }, 200);

    //========== Click < 1
    if (this.clickCount < 1) {
      this.SelectedCard1.id = id;
      this.SelectedCard1.value = value;
      this.SelectedCard1.color = color;
      return this.clickCount++;
    }
    //========== Click = 2
    else if (this.clickCount = 2) {
      this.SelectedCard2.id = id;
      this.SelectedCard2.value = value;
      this.SelectedCard2.color = color;
      this.clicked = !this.clicked;

      //========== Card matching logic
      if (this.SelectedCard1.value == this.SelectedCard2.value && this.SelectedCard1.color == this.SelectedCard2.color) {
        alert("You've matched 2 cards! " + this.SelectedCard1.id + " & " + this.SelectedCard2.id);
        document.getElementById(this.SelectedCard1.id).remove(); //Remove matched card 1 from board
        document.getElementById(this.SelectedCard2.id).remove(); //Remove matched card 2 from board

        //=====Increment Player 1 Score
        if (this.player1Turn == true) {
          this.player1Score += 10;
        }
        //=====Increment Player 2 Score
        else if (this.player1Turn == false) {
          this.player2Score += 10;
        }
      }

      //========== Card not matching logic
      else if (this.SelectedCard1.value != this.SelectedCard2.value || this.SelectedCard1.color != this.SelectedCard2.color) {
        // document.getElementById(this.SelectedCard1.id).classList.add('card-img-back'); //Flip unmatched card 1
        // document.getElementById(this.SelectedCard2.id).classList.add('card-img-back'); //Flip unmatched card 2
      }

      this.flipCards();
      this.player1Turn = !this.player1Turn; //Switch Players turn
      this.reset(); //Reset selected cards
      return this.clickCount = 0; //Reset click count
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
